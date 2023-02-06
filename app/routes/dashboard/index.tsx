import type { ActionArgs, MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import {
  Form,
  useActionData,
  useNavigation,
  useSearchParams,
} from "@remix-run/react";
import * as React from "react";
import { BsLinkedin } from "react-icons/bs";
import { useEffect, useState } from "react";
import {
  createApplicant,
  getApplicantByUsername,
} from "~/models/applicant.server";
import { getProfileData } from "~/services/scraper.server";
import { extractPayloadData, generateReview } from "~/services/cohere.server";
import { createReview } from "~/models/review.server";
import { authenticator } from "~/services/auth.server";

const urlRegex = /https:\/\/www\.linkedin\.com\/in\/(.*)\//;

export const meta: MetaFunction = () => {
  return {
    title: "Linked Insighter | Dashboard Home",
  };
};

const getSlugFromUrl = (url: string) => {
  const match = url.match(urlRegex);
  return match ? match[1] : null;
};

export async function action({ request }: ActionArgs) {
  try {
    const formData = await request.formData();
    let slug = formData.get("slug");
    if (!slug) {
      throw new Error("Please enter a valid LinkedIn profile URL or username");
    }

    if (slug.match(urlRegex)) {
      slug = getSlugFromUrl(slug as string);
      if (!slug) {
        throw new Error(
          "Please enter a valid LinkedIn profile URL or username"
        );
      }
    }

    const applicant = await getApplicantByUsername(slug as string);
    if (applicant) {
      return redirect(`/dashboard/applicants/${slug}`);
    }
    const data = await getProfileData(slug as string);
    const result = await createApplicant(data, slug as string);
    const payload = extractPayloadData(result);
    const review = await generateReview(payload);
    const user = await authenticator.isAuthenticated(request);
    await createReview(review.body.generations[0].text, user.id, result.id);
    return redirect(`/dashboard/applicants/${slug}`);
  } catch (error: any) {
    return { error: { status: 400, message: error.message } };
  }
}

export default function DashboardIndexPage() {
  const [slug, setSlug] = useState("");
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/notes";
  const slugRef = React.useRef<HTMLInputElement>(null);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const actionData = useActionData<typeof action>();

  useEffect(() => {
    if (slug.match(urlRegex)) {
      const parsedSlug = getSlugFromUrl(slug);
      if (parsedSlug) {
        setSlug(parsedSlug);
      }
    }
  }, [slug]);

  if (actionData?.error) {
    return (
      <div className="mt-6">
        <div
          className="mb-4 flex rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <svg
            aria-hidden="true"
            className="mr-3 inline h-5 w-5 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Error:</span>{" "}
            {actionData.error.message}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex min-h-screen flex-col py-8 sm:py-36">
        <div className="mx-auto w-full px-8 sm:max-w-3xl">
          <h1 className="my-4 text-center font-montserrat text-2xl font-extrabold text-gray-200 sm:my-10 sm:text-left sm:text-5xl">
            Unlock your <span className="text-cyan-400">LinkedIn Insights</span>{" "}
            with a single search
          </h1>
          <p className="mb-6 text-gray-400 sm:text-lg">
            Get a personalized analysis of your LinkedIn profile and take
            control of your career with our cutting-edge AI tool.
          </p>
          <Form method="post" className="space-y-6" noValidate>
            <label className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <BsLinkedin className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                ref={slugRef}
                id="slug"
                required
                autoFocus={true}
                name="slug"
                type="text"
                onChange={(e) => setSlug(e.target.value)}
                autoComplete="slug"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="https://linkedin.com/in/exampleuser or exampleuser"
              />
            </div>
            <small className="text-xs font-extralight text-gray-400">
              Enter your LinkedIn profile URL in the search bar, like:{" "}
              <strong>https://linkedin.com/in/myusername</strong> or just the{" "}
              <strong>myusername</strong> part
            </small>
            <input type="hidden" name="redirectTo" value={redirectTo} />
            {isSubmitting ? (
              <button
                disabled
                type="button"
                className="mr-2 inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white py-2.5 px-5 text-sm font-medium text-gray-900 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
              >
                <svg
                  aria-hidden="true"
                  role="status"
                  className="mr-2 inline h-4 w-4 animate-spin text-gray-200 dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="#1C64F2"
                  />
                </svg>
                Getting Insights for <strong className="ml-1">{slug}</strong>
              </button>
            ) : (
              <button
                disabled={isSubmitting || slug.length === 0}
                type="submit"
                className={`${
                  slug.length === 0
                    ? "border border-gray-200 bg-white py-2.5 px-5 font-medium text-gray-900 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
                    : "bg-violet-700 text-gray-200 hover:bg-violet-800 focus:bg-violet-600"
                } w-full rounded-lg py-3 px-4 font-bold`}
              >
                Analyze this LinkedIn Profile
              </button>
            )}
          </Form>
        </div>
      </div>
    </>
  );
}
