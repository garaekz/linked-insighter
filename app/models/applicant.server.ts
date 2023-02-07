import type { Applicant, Education, Experience, Review, Skill } from "@prisma/client";
import type { Profile } from "@garaekz/inscraper";
import { prisma } from "~/db.server";

export type { Applicant } from "@prisma/client";

export type ApplicantWithRelations = Applicant & {
  experiences: Experience[];
  educations: Education[];
  skills: Skill[];
  reviews: Review[];
};

export async function getApplicantByUsername(username: Applicant["username"]) {
  return prisma.applicant.findUnique({
    where: { username },
    include: {
      experiences: true,
      educations: true,
      skills: true,
      reviews: { orderBy: { createdAt: "desc" }},
    },
  });
}

export async function createApplicant(profile: Profile, slug: string) {
  const applicant = await prisma.applicant.create({
    data: {
      name: profile.name,
      username: slug,
      headline: profile.headline,
      location: profile.location,
      pictureUrl: profile.profilePicture,
      summary: profile.summary,
      experiences: {
        create: profile.experience.map((exp: any) => ({
          title: exp.title,
          company: exp.company,
          location: exp.location,
          tenure: exp.tenure,
          description: exp.description,
        })),
      },
      educations: {
        create: profile.education.map((edu: any) => ({
          school: edu.school,
          degree: edu.degree,
          fieldOfStudy: edu.fieldOfStudy,
          startDate: edu.startDate,
          endDate: edu.endDate,
          description: edu.description,
        })),
      },
      skills: {
        create: profile.skills.map((skill: string) => ({
          name: skill,
        })),
      },
    },
    include: {
      experiences: true,
      educations: true,
      skills: true,
      reviews: { orderBy: { createdAt: "desc" }},
    },
  });

  return applicant;
}