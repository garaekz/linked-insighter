import { Link } from "@remix-run/react";

export default function FallbackPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen h-full w-full bg-white dark:bg-gray-900 ">
      <section>
        <div className="mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="text-violet-600 dark:text-violet-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
              404
            </h1>
            <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{" "}
            </p>
            <Link
              to="/"
              className="bg-violet-600 hover:bg-violet-800 focus:ring-violet-300 dark:focus:ring-violet-900 my-4 inline-flex rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
