import type { User } from "@prisma/client";
import { Form, Link, useMatches } from "@remix-run/react";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import { DynamicLogo } from "./logo.component";

export default function RootNavbar({ user }: { user: User }) {
  const matches = useMatches();
  const { pathname } = matches[matches.length - 1];
  return (
    <Navbar fluid={true} className="sm:px-10">
      <Navbar.Brand href="/dashboard">
        <DynamicLogo className="mr-3 h-6 sm:h-9 p-1.5 text-gray-800 dark:text-gray-200" />
      </Navbar.Brand>
      {user ? (
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img={user.avatarUrl || undefined}
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block font-bold text-base">{user.username}</span>
              <span className="block truncate text-xs font-light">
                {user.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              <Form action="/logout" method="post">
                <button>Logout</button>
              </Form>
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      ) : (
        <div className="flex md:order-2">
          <Navbar.Link href="/login">Login</Navbar.Link>
          <Navbar.Link href="/register">Register</Navbar.Link>
          <Navbar.Toggle />
        </div>
      )}

      <Navbar.Collapse>
        <Link
          to="/"
          className="font-semibold text-gray-800 hover:text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
        >
          Home
        </Link>
        <Link
          to="/dashboard"
          className={`${pathname === '/dashboard/' ? 'font-bold dark:text-gray-800 dark:hover:text-gray-500 text-violet-900 dark:text-cyan-400':'text-gray-800 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 font-semibold'  }`}
        >
          New Search
        </Link>
        <Link
          to="/dashboard/my-searches"
          className={`${pathname === '/dashboard/my-searches' ? 'font-bold dark:text-gray-800 dark:hover:text-gray-500 text-violet-900 dark:text-cyan-400':'text-gray-800 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 font-semibold'  }`}
        >
          My Searches
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
