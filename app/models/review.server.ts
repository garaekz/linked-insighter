import type { Applicant, Review, User } from "@prisma/client";

import { prisma } from "~/db.server";

export type { Review } from "@prisma/client";

export type ReviewByUser = Review & {
  applicant: Applicant;
};

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

export async function getReviewsByUser({ userId }: { userId: User["id"] }): Promise<ReviewByUser[]> {
  return prisma.review.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    include: { applicant: true },
  });
}

export async function createReview(content: string, userId: string, applicantId: string) {
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

export async function deleteReview(id: string) {
  return prisma.review.delete({
    where: { id },
  });
}