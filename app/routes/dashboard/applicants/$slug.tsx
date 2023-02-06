import { useLoaderData, Outlet } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/server-runtime";
import { getApplicantByUsername } from "~/models/applicant.server";
import { authenticator } from "~/services/auth.server";
import type { User } from "~/models/user.server";

export async function loader({ request, params }: LoaderArgs) {
  const user: User = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  const { slug } = params;
  const applicant = await getApplicantByUsername(slug as string);
  return { applicant, user };
}

export default function SingleApplicantsPage() {
  const { applicant, user } = useLoaderData<typeof loader>();
  return (
    <>
    { applicant && user && 
      <div className="mx-auto my-20 w-full max-w-5xl">
        <div className="w-1/2">
          <h1 className="text-3xl">
            <span className="font-bold">Hi @{user.username}, </span> this is
            what I found about{" "}
            <span className="font-bold italic">{applicant.name}</span>
          </h1>
          <div className="my-20">
            <div className="flex flex-col font-medium">
              <p>
                {applicant.name}{" "}
                <span className="font-bold">@{applicant.username}</span>
              </p>
              <p>{applicant.headline}</p>
            </div>
          </div>
        </div>
        <div className="my-20">
          <Outlet />
        </div>
      </div>
    }
    </>
  );
}
