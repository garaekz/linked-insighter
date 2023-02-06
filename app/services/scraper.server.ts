import { createClient } from '@garaekz/inscraper';

export const getProfileData = async (slug: string) => {
  const client = createClient(process.env.LI_COOKIE);
  return await (await client).getProfile(slug, 'full');
};
