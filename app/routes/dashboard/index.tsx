import type { ActionArgs, LoaderArgs, MetaFunction } from "@remix-run/node";
import { Form, useActionData, useNavigation, useSearchParams } from "@remix-run/react";
import * as React from "react";
import { json } from "@remix-run/node";
import { getProfileData } from "~/services/scraper.server";
import { authenticator } from "~/services/auth.server";
import cohere from "cohere-ai";

export async function action({ request }: ActionArgs) {
  try {
    const formData = await request.formData();
    const slug = formData.get("slug");
    const result = await getProfileData(slug as string);
    let data = extractImportantData(result);
    cohere.init('hMW6Qq58GQgVf4Gn6Wv26MD8zc2oSrwrKpgIKj6g')
    const response = await cohere.generate({
      model: 'command-xlarge-nightly',
      truncate: 'END',
      prompt: `Analyze the following LinkedIn profile data and provide insights into their skills and experience with his technologies. Identify their strengths, areas for improvement, their apparent seniority and suggest ways to optimize their profile for better visibility and career advancement opportunities: ${JSON.stringify(data)}`,
      max_tokens: 1200,
      temperature: 0.8,
      k: 300,
      p: 0.6,
      return_likelihoods: 'NONE',
    });
    console.log(response);
    console.log(response.body.generations);
    return JSON.stringify(data);
  } catch (error: any) {
    console.error(error);
    return json({ error: error.message }, { status: 500 });
  }
}

export const loader = async ({ request, params }: LoaderArgs) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  return { user };
};

export const meta: MetaFunction = () => {
  return {
    title: "Scraper Test",
  };
};

export default function ScrapPage() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/notes";
  const slugRef = React.useRef<HTMLInputElement>(null);
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
    <div className="flex min-h-full flex-col justify-center">
      <div className="mx-auto w-full max-w-md px-8">
        <Form method="post" action="/dashboard/applicants" className="space-y-6" noValidate>
          <div>
            <label
              htmlFor="slug"
              className="block text-sm font-medium text-gray-700"
            >
              Slug
            </label>
            <div className="mt-1">
              <input
                ref={slugRef}
                id="slug"
                required
                autoFocus={true}
                name="slug"
                type="text"
                autoComplete="slug"
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
              />
            </div>
          </div>

          <input type="hidden" name="redirectTo" value={redirectTo} />
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
          >
            { isSubmitting ? 'Fetching...' : 'Consult' }
          </button>
        </Form>
      </div>
      <div className="py-4 mx-auto w-full max-w-4xl whitespace-pre-wrap	">
        <pre className="whitespace-pre-wrap	">{JSON.stringify(actionData, null, 2)}</pre>
      </div>
    </div>
    </>
  );
}
