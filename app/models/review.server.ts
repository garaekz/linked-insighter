import type { Applicant, User, Review } from "@prisma/client";

import { prisma } from "~/db.server";

export type { Review } from "@prisma/client";

export async function getReviewListItems({ userId }: { userId: User["id"] }) {
  return prisma.review.findMany({
    where: { userId },
    select: { id: true, content: true },
    orderBy: { updatedAt: "desc" },
  });
}

export async function getReviewsByApplicantUsername(
  username: Applicant["username"]
) {
  return prisma.review.findMany({
    where: { applicant: { username } },
    select: { id: true, content: true },
    orderBy: { createdAt: "desc" },
  });
}

export async function createReview({
  content,
  userId,
  applicantId,
}: Pick<Review, "content"> & {
  userId: User["id"];
  applicantId: Applicant["id"];
}) {
  return prisma.review.create({
    data: {
      content,
      applicant: {
        connect: {
          id: applicantId,
        },
      },
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}
