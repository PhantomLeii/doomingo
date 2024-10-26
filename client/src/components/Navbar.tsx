import { Link } from "@tanstack/react-router";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import React from "react";

const navItems = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "About",
    url: "/about",
  },
  {
    text: "Settings",
    url: "/settings",
  },
];

const links = [
  {
    icon: GitHubLogoIcon,
    url: "https://github.com/PhantomLeii/doomingo/",
  },
  {
    icon: LinkedInLogoIcon,
    url: "https://linkedin.com/in/phoshoko-ml",
  },
];

export default function Navbar() {
  return (
    <div className="bg-background text-foreground h-[100px] fixed top-0 w-full flex flex-col justify-center items-center">
      <div className="container w-full h-[100px] flex justify-between items-center">
        <h2 className="text-3xl font-bold text-neutral-500">
          <Link to="/">
            DOO-<span className="text-white">MINGO!</span>
          </Link>
        </h2>

        <nav className="flex justify-center items-center gap-4">
          {navItems.map(({ text, url }) => (
            <Link
              to={url}
              key={url}
              className=" text-xl hover:font-bold [&.active]:font-bold text-neutral-400 [&.active]:text-white transition-all duration-300"
            >
              {text}
            </Link>
          ))}
        </nav>

        <nav className="flex justify-center items-center gap-2">
          {links.map(({ icon, url }) => (
            <Link to={url} key={url} className="h-8 w-8">
              {React.createElement(icon, { width: 24, height: 24 })}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
