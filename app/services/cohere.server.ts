import type { Applicant, Skill } from "@prisma/client";
import cohere from "cohere-ai";

export const extractPayloadData = (applicant: Applicant) => {
  const { name, headline, summary } = applicant;
  const skills = applicant.skills.map((skill: Skill) => skill.name).join(", ");
  return `${name} ${headline}, my skills: ${skills} summary: ${summary}}`;
};


export const generateReview = async (payload: string) => {
  cohere.init(process.env.COHERE_TOKEN!)
  return await cohere.generate({
    model: 'command-xlarge-nightly',
    truncate: 'END',
    prompt: `Analyze the following LinkedIn profile data and provide insights about their skills and experience with his technologies. Identify their strengths, areas for improvement, their apparent seniority and suggest ways to optimize their profile for better visibility and career advancement opportunities: ${JSON.stringify(payload)}`,
    max_tokens: 1200,
    temperature: 0.8,
    k: 300,
    p: 0.6,
    return_likelihoods: 'NONE',
  });
};
