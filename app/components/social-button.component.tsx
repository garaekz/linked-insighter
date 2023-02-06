import { Form } from "@remix-run/react";
import { RxDiscordLogo } from "react-icons/rx";
import { VscGithub } from "react-icons/vsc";
import { SlSocialGoogle, SlSocialTwitter } from "react-icons/sl";

const GithubButton: React.FC = () => (
  <button type="submit" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2 w-full">
    <VscGithub className="w-6 h-5 mr-4 -ml-1" />
    Sign in with Github
  </button>
);

const DiscordButton: React.FC = () => (
  <button type="submit" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2 w-full">
    <RxDiscordLogo className="w-6 h-5 mr-3 -ml-1" />
    Sign in with Discord
  </button>
);

const GoogleButton: React.FC = () => (
  <button type="submit" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2 w-full">
    <SlSocialGoogle className="w-6 h-5 mr-3 -ml-1" />
    Sign in with Google
  </button>
);

const TwitterButton: React.FC = () => (
  <button type="submit" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2 w-full">
    <SlSocialTwitter className="w-6 h-5 mr-3 -ml-1" />
    Sign in with Twitter
  </button>
);

const providers = [
  {
    name: 'github',
    button: <GithubButton />,
  },
  {
    name: 'discord',
    button: <DiscordButton />,
  },
  {
    name: 'google',
    button: <GoogleButton />,
  },
  {
    name: 'twitter',
    button: <TwitterButton />,
  }
];

export const MultiSocialButtons: React.FC = () => {
  return (
    <div>
      {providers.map((provider) => (
        <Form key={provider.name} method="post" action={`/auth/${provider.name}`}>
          { provider.button }
        </Form>
      ))}
    </div>
  );
}