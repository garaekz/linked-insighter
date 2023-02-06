import { Form } from "@remix-run/react";
import { Dropdown, Navbar, Avatar } from "flowbite-react";

export default function RootNavbar({ user }) {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>
      { user ? <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              alt="User settings"
              img={user.avatarUrl}
              rounded={true}
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{ user.username }</span>
            <span className="block truncate text-sm font-medium">
              { user.email }
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
          <Form action="/logout" method="post">
            <button>Logout</button>
          </Form>
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      : <div className="flex md:order-2">
        <Navbar.Link href="/login">Login</Navbar.Link>
        <Navbar.Link href="/register">Register</Navbar.Link>
        <Navbar.Toggle />
      </div> }
      
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
