import { redirect } from "@remix-run/node";
import type { ActionArgs, LoaderArgs, MetaFunction } from "@remix-run/node";

import { authenticator } from "~/services/auth.server";
import { MultiSocialButtons } from "~/components/social-button.component";
import { useActionData } from "@remix-run/react";

export async function loader({ request }: LoaderArgs) {
  const user = await authenticator.isAuthenticated(request);
  if (user) return redirect("/dashboard");
  return null;
}

export const action = ({ request, params }: ActionArgs) => {
  const { provider } = params;
  if (!provider) return { error: { status: 400, message: "This provider is not supported"}}
  return authenticator.authenticate(provider, request);
};

export const meta: MetaFunction = () => {
  return {
    title: "Login",
  };
};

export default function LoginPage() {
  const actionData = useActionData<typeof action>();
  console.log(actionData);
  return (
    <div className="flex flex-col justify-center min-h-full bg-white dark:bg-gray-900">
      <section>
        <div className="max-w-4xl w-full mx-auto px-6 py-24 lg:py-32">
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <img
                className="h-7 w-auto sm:h-8"
                src="/loguito.svg"
                alt=""
              />

              <h1 className="mt-4 text-gray-600 dark:text-gray-300 md:text-lg">
                Welcome back
              </h1>

              <h1 className="mt-4 text-2xl font-medium capitalize text-gray-800 dark:text-white lg:text-3xl">
                login to your account
              </h1>
            </div>

            <div className="mt-8 lg:mt-0 lg:w-1/2">
            <div className="mx-auto w-full max-w-md px-8">
              <MultiSocialButtons />
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
