import type { LoaderArgs } from "@remix-run/server-runtime";
import { useLoaderData } from "@remix-run/react";
import { createReview, getReviewsByApplicantUsername } from "~/models/review.server";
import { getApplicantByUsername } from "~/models/applicant.server";
import { extractPayloadData, generateReview } from "~/services/cohere.server";
import { authenticator } from "~/services/auth.server";

export async function loader({ request, params }: LoaderArgs) {
  try {
    const { slug } = params;
    let reviews = await getReviewsByApplicantUsername(slug as string);
    if (reviews.length === 0) {
      const applicant = await getApplicantByUsername(slug as string);
      if (!applicant) return null;
      const payload = extractPayloadData(applicant);
      const aiGenerated = await generateReview(payload);
      const user = await authenticator.isAuthenticated(request);
      reviews = await createReview({content: aiGenerated.body.generations[0].text, userId: user.id, applicantId: applicant.id})
      return { reviews };
    }
    return { reviews };
  } catch (error) {
    console.log(error);
  }
  return null;
}

export default function SingleApplicantsIndex() {
  const { reviews } = useLoaderData<typeof loader>();
  console.log('reviews: ', reviews);
  return (
    <>
      {reviews && reviews.length > 0 ? (
        <div className="mx-auto my-20 w-full max-w-5xl">
          <div className="w-full">
            <p>
              {reviews.map((review) => {
                return (
                  <div key={review.id}>
                    <p>{review.content}</p>
                  </div>
                );
              })}
            </p>
          </div>
        </div>
      ) : (
        <div className="mx-auto my-20 w-full max-w-5xl">
          <div className="w-full">
            <p>No reviews yet :c</p>
          </div>
        </div>
      )}
    </>
  );
}
