import Link from "next/link";
import Image from "next/image";



const menuItems = [
  {
    label: "About Us",
    url: "/aboutus",
    submenu: [
      { label: "Claim your puppy", url: "/claim" },
      { label: "Add your puppy", url: "/addapuppy" },
    ],
  },
  { label: "Contact", url: "/search" },
];

const drawerOnly = [{ label: "Search", component: "Search" }];

// Top navbar
export default function Navbar() {
  

  return (
    <div className="navbar bg-neutral text-neutral-content ">
      {<NavBarStart key="navbarstart" />}
      {<NavBarCentre key="navbarcentre" />}
     
    </div>
  );
}
//https://daisyui.com/components/avatar/

export function DrawerItem(props) {
  console.log("DrawerItem", props);
  if (props.item.submenu) {
    return (
      <li tabIndex="0">
        <Link href="/">
          <a className="justify-between">
            {props.item.label}
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
          </a>
        </Link>
        <ul className="p-2 bg-base-200 shadow-xl text-base-content">
          {props.item.submenu.map((item) => (
            <li key={`${item.label}`.replace(" ", "")}>
              <Link href={item.url}>
                <a>{item.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }
  return (
    <li>
      <Link href={props.item.url}>
        <a>{props.item.label}</a>
      </Link>
    </li>
  );
}

export function NavBarItem(props) {
  console.log("NavBarItem", props);
  if (props.item.submenu) {
    return (
      <li tabIndex="0">
        <Link href="/">
          <a className="justify-between">
            {props.item.label}
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </a>
        </Link>
        <ul className="p-2 bg-base-200 shadow-xl text-base-content">
          {props.item.submenu.map((item) => (
            <li key={`${item.label}`.replace(" ", "")}>
              <Link href={item.url}>
                <a>{item.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  return (
    <li>
      <Link href={props.item.url}>
        <a>{props.item.label}</a>
      </Link>
    </li>
  );
}

export function NavBarStart() {
  return (
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex="0" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex="0"
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          {menuItems.map((item) => (
            <DrawerItem key={`${item.label}`.replace(" ", "")} item={item} />
          ))}
        </ul>
      </div>
      
      <Link href="/">
        <a className="hidden md:btn md:btn-ghost md:normal-case md:text-xl">
          My Site
        </a>
      </Link>
    </div>
  );
}

export function NavBarCentre() {
  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal p-0">
        {menuItems.map((item) => (
          <NavBarItem key={`${item.label}`.replace(" ", "")} item={item} />
        ))}
      </ul>
    </div>
  );
}



