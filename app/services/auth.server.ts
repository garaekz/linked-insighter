import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/services/session.server";
import { GitHubStrategy } from "remix-auth-github";

export const authenticator = new Authenticator(sessionStorage);

async function handleSocialAuthCallback({ profile }) {
  return profile;
}

authenticator.use(
  "github",
  new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callback: handleSocialAuthCallback,
  })
);