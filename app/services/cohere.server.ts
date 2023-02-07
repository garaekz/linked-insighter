import type { Applicant, Skill } from "@prisma/client";
import cohere from "cohere-ai";
import type { ApplicantWithRelations } from "~/models/applicant.server";

export const extractPayloadData = (applicant: ApplicantWithRelations) => {
  const { name, headline, summary } = applicant;
  const skills = applicant.skills ? applicant.skills.map((skill: Skill) => skill.name).join(", ") : null;
  return `${name} ${headline}, ${skills ? `my skills: ${skills}`: ''} summary: ${summary}}`;
};

const LONG_PROMT = `Analyze the LinkedIn profile data I'm gonna give you and provide a comprehensive report on the following aspects: Skills and experience with technologies: Evaluate the individual's technical proficiency and highlight their key strengths and areas for improvement. Apparent seniority: Determine the level of experience and professional standing based on the information provided in the profile. Optimization suggestions: Recommend ways to enhance the visibility of the profile and increase the likelihood of career advancement opportunities. present the report in a clear and organized manner, divided into paragraphs for easy readability. The profile:`

const SHORTER_PROMT = `Analyze a LinkedIn profile and provide a report on the individual's technical proficiency, apparent seniority, and profile optimization suggestions. Highlight strengths and areas for improvement in their skills and experience with technologies. Present the report in a clear and organized manner with paragraphs. The profile:`

export const generateReview = async (payload: string) => {
  cohere.init(process.env.COHERE_TOKEN!)
  return await cohere.generate({
    model: 'command-xlarge-nightly',
    prompt: `${SHORTER_PROMT} ${JSON.stringify(payload)}`,
    max_tokens: 1000,
    temperature: 0.9,
    k: 250,
    p: 0.75,
    return_likelihoods: 'NONE',
  });
};
