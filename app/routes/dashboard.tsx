import type { LoaderArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";
import RootNavbar from "~/components/navbar.component";

export const loader = async ({ request, params }: LoaderArgs) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  return { user };
};

export default function ScrapPage() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <>
    <RootNavbar user={user} />
    <Outlet />
    </>
  );
}
