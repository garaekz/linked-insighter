import {
  useLoaderData,
  Form,
  useNavigation,
  useActionData,
  useSubmit,
} from "@remix-run/react";
import type { ActionArgs, LoaderArgs } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import { redirect } from "@remix-run/server-runtime";
import { getApplicantByUsername } from "~/models/applicant.server";
import { createReview, deleteReview } from "~/models/review.server";
import { authenticator } from "~/services/auth.server";
import { extractPayloadData, generateReview } from "~/services/cohere.server";
import { dateToTimeAgo, isDeleted, isError } from "~/utils";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import type { GenericError } from "~/types";

export async function loader({ request, params }: LoaderArgs) {
  const user = await authenticator.isAuthenticated(request);
  const { slug } = params;
  const applicant = await getApplicantByUsername(slug as string);

  if (!applicant || !user) {
    return { applicant: null, user: null };
  }
  return { applicant, user };
}

export async function action({ request, params }: ActionArgs) {
  switch (request.method) {
    case "POST": {
      try {
        const { slug } = params;
        const result = await getApplicantByUsername(slug as string);
        if (!result) {
          throw new Error("Applicant not found");
        }
        const payload = extractPayloadData(result!);
        const review = await generateReview(payload);
        const user = await authenticator.isAuthenticated(request, {
          failureRedirect: "/login",
        });
        await createReview(review.body.generations[0].text, user.id, result.id);
        return redirect(`/dashboard/applicants/${slug}`);
      } catch (error: any) {
        return json({ error: { status: 400, message: error.message } });
      }
    }
    case "DELETE": {
      try {
        const form = await request.formData();
        const reviewId = form.get("reviewId") as string;
        await deleteReview(reviewId);
        return { deleted: true };
      } catch (error: any) {
        return json({ error: { status: 400, message: error.message } });
      }
    }
    default: {
      return json({ error: { status: 405, message: "Method Not Allowed" } });
    }
  }
}

export default function SingleApplicantsPage() {
  const submit = useSubmit();
  const [deletingReview, setDeletingReview] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const { applicant, user } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const actionData = useActionData<typeof action>();
  const error = useActionData() as unknown as GenericError | undefined;

  useEffect(() => {
    if (isDeleted(actionData)) {
      resetDeleteState();
    }
  }, [actionData]);

  const confirmDelete = (reviewId: string) => {
    setDeletingReview(reviewId);
    setIsDeleting(true);
  };

  const resetDeleteState = () => {
    setDeletingReview("");
    setIsDeleting(false);
  };

  const deleteReview = async () => {
    const form = new FormData();
    form.append("reviewId", deletingReview);
    submit(form, { method: "delete" });
  };

  if (!applicant || !user) {
    return (
      <div>
        <h1 className="text-3xl">An error occurred, please try again later.</h1>
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto mt-20 w-full max-w-5xl px-4 text-slate-800 dark:text-gray-200">
        <div className="sm:w-2/3">
          <h1 className="text-3xl">
            Hi{" "}
            <span className="font-bold dark:text-cyan-300 text-violet-900">
              {" "}
              {user.username ? `@${user.username}` : user.name}!,{" "}
            </span>{" "}
            this is what I found about{" "}
            <span className="font-bold italic dark:text-cyan-300 text-violet-900">
              {applicant.name}
            </span>
          </h1>
          <div className="my-10 flex flex-col rounded-lg border border-gray-300 dark:border-gray-600 p-4 sm:flex-row">
            <div className="p-2">
              <img
                src={
                  applicant.pictureUrl ||
                  "https://via.placeholder.com/150?Text=No Photo Available"
                }
                alt="Applicant"
                className="w-96 rounded-lg"
              />
            </div>
            <div className="flex flex-col p-2 font-medium">
              <h4 className="text-2xl font-semibold text-slate-800 dark:text-gray-400">
                {applicant.name}{" "}
                {applicant.username ? ` (@${applicant.username})` : ""}
              </h4>
              <p className="text-sm font-base text-slate-800 dark:text-gray-300 dark:font-light">{applicant.headline}</p>
              <div className="mt-10 flex flex-wrap">
                {applicant.skills.slice(0, 5).map((skill) => (
                  <span
                    key={skill.id}
                    className="mx-2 my-1 rounded-lg bg-gray-400 dark:bg-gray-600 p-2 text-sm dark:font-light"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
              <Form method="post" className="mt-8" noValidate>
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
                    Getting Insights for{" "}
                    <strong className="ml-1">{applicant.username}</strong>
                  </button>
                ) : (
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className={`w-full rounded-lg bg-violet-700 py-3 px-4 font-bold text-gray-200 hover:bg-violet-800 focus:bg-violet-600`}
                  >
                    Analyze this LinkedIn Profile
                  </button>
                )}
              </Form>

              {isError(actionData) && (
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
                      {isError(actionData) && actionData.error.message}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {applicant.reviews?.length === 0 ? (
          <div className="my-10 flex w-full flex-col rounded-lg border border-gray-600 p-4">
            <h1 className="text-2xl font-semibold text-gray-300">
              No reviews yet
            </h1>
          </div>
        ) : (
          <h1 className="text-2xl font-semibold text-slate-800 dark:text-gray-300">
            Reviews ({applicant.reviews.length})
          </h1>
        )}
        {applicant.reviews.map((review) => (
          <div
            key={review.id}
            id={review.id}
            className="my-5 flex w-full flex-col rounded-lg border border-gray-300 dark:border-gray-600 p-4"
          >
            <div className="mb-8 flex w-full justify-between">
              <span>Created {dateToTimeAgo(review.createdAt)}</span>
              {review.userId === user.id && (
                <button
                  onClick={() => confirmDelete(review.id)}
                  className="text-sm text-white dark:bg-transparent bg-red-500 px-4 py-2 rounded-md dark:text-red-500 hover:text-red-100 hover:bg-red-700 dark:hover:bg-transparent dark:hover:text-red-600"
                >
                  Delete
                </button>
              )}
            </div>
            <div className="flex flex-col gap-2">
              {review.content.split("\n").map((line, index) => (
                <p key={index} className="text-sm dark:font-light">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Transition appear show={isDeleting} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-20"
          onClose={() => resetDeleteState()}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-gray-700">
                  <button
                    type="button"
                    className="absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={() => resetDeleteState()}
                  >
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <svg
                      aria-hidden="true"
                      className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </Dialog.Title>
                  <div className="mt-2">
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                      Are you sure you want to delete this review?
                    </h3>
                  </div>

                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      onClick={() => deleteReview()}
                      className="mr-2 inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800"
                    >
                      Yes, I'm sure
                    </button>
                    <button
                      onClick={() => resetDeleteState()}
                      type="button"
                      className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
                    >
                      No, cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
