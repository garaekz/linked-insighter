import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";

export async function loader() {
  return redirect("/login");
}

const validProviders = ["github", "google", "twitter", "discord"];
export async function action({ request, params }: ActionArgs) {
  const provider = params.provider;
  if (!provider || !validProviders.includes(provider)) {
    return redirect("/login");
  }
  return authenticator.authenticate(provider, request);
};