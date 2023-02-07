import { DiscordStrategy, GoogleStrategy, SocialsProvider, TwitterStrategy } from 'remix-auth-socials';
import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/services/session.server";
import { GitHubStrategy } from "remix-auth-github";
import { prisma } from "~/db.server";
import type { User } from '@prisma/client';

export const authenticator = new Authenticator<User>(sessionStorage);
const baseUrl = process.env.REDIRECT_BASE_URL || "http://localhost:3000";
const getCallback = (provider: string) => {
  return `${baseUrl}/auth/${provider}/callback`
}

const gitHubStrategy = new GitHubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID!,
    clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    callbackURL: getCallback(SocialsProvider.GITHUB),
  },
  async ({ profile }) => {
    try {
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
    } catch (error) {
      throw error;
    }
  }
);

const discordStrategy = new DiscordStrategy(
  {
    clientID: process.env.DISCORD_CLIENT_ID!,
    clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    callbackURL: getCallback(SocialsProvider.DISCORD),
  },
  async ({ profile }) => {
    const user = await prisma.user.upsert({
      where: {
        email: profile.emails![0].value,
      },
      update: {
        discordId: profile.id,
      },
      create: {
        email: profile.emails![0].value,
        name: profile.displayName,
        avatarUrl: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.photos![0].value}.png`,
        discordId: profile.id,
      },
    });

    return user;
  }
);

const googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: getCallback(SocialsProvider.GOOGLE),
  },
  async ({ profile }) => {
    const user = await prisma.user.upsert({
      where: {
        email: profile.emails![0].value,
      },
      update: {
        googleId: profile.id,
      },
      create: {
        email: profile.emails![0].value,
        name: profile.displayName,
        avatarUrl: profile.photos![0].value,
        googleId: profile.id,
      },
    });
    return user;
  }
);

const twitterStrategy = new TwitterStrategy(
  {
    clientID: process.env.TWITTER_CLIENT_ID!,
    clientSecret: process.env.TWITTER_CLIENT_SECRET!,
    callbackURL: getCallback(SocialsProvider.TWITTER),
    includeEmail: true,
  },
  async ({ profile }) => {
    const user = await prisma.user.upsert({
      where: {
        email: profile.email,
      },
      update: {
        twitterId: profile.id_str,
      },
      create: {
        email: profile.email!,
        name: profile.name,
        username: profile.screen_name,
        avatarUrl: profile.profile_image_url_https,
        twitterId: profile.id_str,
      },
    });
    return user;
  }
);



authenticator.use(gitHubStrategy);
authenticator.use(discordStrategy);
authenticator.use(googleStrategy);
authenticator.use(twitterStrategy);