import type { ActionArgs, LoaderArgs, MetaFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import type { ReviewByUser } from "~/models/review.server";
import { deleteReview } from "~/models/review.server";
import { getReviewsByUser } from "~/models/review.server";
import { authenticator } from "~/services/auth.server";
import { dateToTimeAgo, isDeleted, isError } from "~/utils";
import { BsFillEyeFill, BsFillTrashFill } from "react-icons/bs";
import { Link, useActionData, useLoaderData, useSubmit } from "@remix-run/react";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export const loader = async ({ request }: LoaderArgs) => {
  try {
    const user = await authenticator.isAuthenticated(request, {
      failureRedirect: "/login",
    });
    const reviews = await getReviewsByUser(user.id);
    return json({ reviews });
  } catch (error: any) {
    return json({ error: {status: 400, message: error.message} });
  }
};

export const action = async ({ request }: ActionArgs) => {
  try {
    const form = await request.formData();
    const reviewId = form.get("reviewId") as string;
    await deleteReview(reviewId);
    return json({ deleted: true })
  } catch (error: any) {
    return json({ error: {status: 400, message: error.message} });
  }
};

export const meta: MetaFunction = () => {
  return {
    title: "Linked Insighter | My Insights",
  };
};

export default function MySearchesPage() {
  const submit = useSubmit();
  const [deletingReview, setDeletingReview] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const actionData = useActionData<typeof action>();
  const loaderData = useLoaderData<typeof loader>();
  const reviews = useLoaderData() as unknown as { reviews: ReviewByUser[] } | undefined;

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
  }

  if (isError(loaderData) || isError(actionData)) {
    const actionErrorMessage = isError(actionData) && actionData.error.message;
    const loadedrErrorMessage = isError(loaderData) && loaderData.error.message;
    return (
      <div className="flex min-h-screen flex-col py-8 sm:items-center sm:justify-center">
        <div className="sm:max-w-8xl mx-auto w-full px-8">
          <h1 className="my-4 text-center font-montserrat text-2xl font-extrabold text-gray-200 sm:my-10 sm:text-left sm:text-5xl">
            { actionErrorMessage || loadedrErrorMessage }
          </h1>
        </div>
      </div>
    );
  }

  if (Array.isArray(loaderData) && loaderData[0] && 'reviews' in loaderData[0]) {
    return (
      <div className="flex h-screen items-center">
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            No reviews found
          </h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex min-h-screen flex-col py-8 sm:items-center">
        <div className="mx-auto w-full px-8 sm:max-w-6xl">
          <section className="bg-gray-50 py-3 dark:bg-gray-900 sm:py-5">
            <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
              <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                <div className="flex flex-col space-y-3 px-4 py-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
                  <div className="flex flex-1 items-center space-x-4">
                    <h5>
                      <span className="text-gray-500">Total Insights:</span>
                      <span className="dark:text-white"> {reviews?.reviews.length}</span>
                    </h5>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                    <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-4 py-3">
                          Applicant
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Profile
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Created At
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {reviews && reviews.reviews.map((review) => (
                        <tr
                          key={review.id}
                          className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
                        >
                          <th
                            scope="row"
                            className="flex items-center whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
                          >
                            <img
                              src={
                                review.applicant.pictureUrl ||
                                "https://via.placeholder.com/150?Text=No Photo Available"
                              }
                              alt={review.applicant.name}
                              className="mr-3 h-8 w-auto rounded-full"
                            />
                            <div>
                              <div className="text-sm font-medium">
                                {review.applicant.name}
                              </div>
                              <div className="text-xs text-gray-500">
                                {review.applicant.username}
                              </div>
                            </div>
                          </th>
                          <td className="px-4 py-2">
                            <a
                              href={`https://www.linkedin.com/in/${review.applicant.username}`}
                              target="_blank"
                              rel="noreferrer"
                              className="text-indigo-600 hover:text-indigo-400"
                            >
                              {`https://www.linkedin.com/in/${review.applicant.username}`}
                            </a>
                          </td>
                          <td className="whitespace-nowrap px-4 py-2">
                            {dateToTimeAgo(review.createdAt)}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                            <div className="flex items-center gap-2">
                              <div className="group relative flex justify-center">
                                <Link
                                  to={`/dashboard/applicants/${review.applicant.username}#${review.id}`}
                                  className="rounded bg-indigo-600 p-2 font-bold text-white hover:bg-indigo-700"
                                >
                                  <BsFillEyeFill />
                                </Link>
                                <span className="absolute bottom-10 z-10 scale-0 rounded bg-gray-900 p-2 text-xs text-white transition-all group-hover:scale-100">
                                  View
                                </span>
                              </div>
                              <div className="group relative flex justify-center">
                                <button
                                  onClick={() => confirmDelete(review.id)}
                                  className="rounded bg-red-600 p-2 font-bold text-white hover:bg-red-700"
                                >
                                  <BsFillTrashFill />
                                </button>
                                <span className="absolute bottom-10 z-10 scale-0 rounded bg-gray-900 p-2 text-xs text-white transition-all group-hover:scale-100">
                                  Delete
                                </span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
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
