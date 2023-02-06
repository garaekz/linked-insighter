import type { ActionArgs, LoaderArgs, MetaFunction} from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Outlet, useActionData, useNavigation, useSearchParams } from "@remix-run/react";
import * as React from "react";
import { json } from "stream/consumers";
import { createApplicant, getApplicantByUsername } from "~/models/applicant.server";
import { authenticator } from "~/services/auth.server";
import { getProfileData } from "~/services/scraper.server";


export async function action({ request }: ActionArgs) {
  try {
    const formData = await request.formData();
    const slug = formData.get("slug");
    const applicant = await getApplicantByUsername(slug as string);
    if (applicant) {
      return redirect(`/dashboard/applicants/${slug}`);
    }
    const data = await getProfileData(slug as string);
    const result = await createApplicant(data, slug as string);
    if (result) {
      return redirect(`/dashboard/applicants/${slug}`);
    }
    return null;
  } catch (error: any) {
    console.error(error);
  }
  return null;
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

export default function ApplicantsPage() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/notes";
  const slugRef = React.useRef<HTMLInputElement>(null);
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <Outlet />
    </>
  );
}
