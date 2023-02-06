import { SocialsProvider } from 'remix-auth-socials';
import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/services/session.server";
import { GitHubStrategy } from "remix-auth-github";
import { prisma } from "~/db.server";

export const authenticator = new Authenticator(sessionStorage);

const getCallback = (provider: string) => {
  return `http://localhost:3000/auth/${provider}/callback`
} 

let gitHubStrategy = new GitHubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID!,
    clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    callbackURL: getCallback(SocialsProvider.GITHUB),
  },
  async ({ profile }) => {
    const user = await prisma.user.upsert({
      where: {
        email: profile.emails![0].value,
      },
      update: {},
      create: {
        email: profile.emails![0].value,
        name: profile.name!.givenName,
        avatarUrl: profile.photos![0].value,
        username: profile.displayName,
        githubId: profile.id,
      },
    });
    return user;
  }
);

authenticator.use(gitHubStrategy);