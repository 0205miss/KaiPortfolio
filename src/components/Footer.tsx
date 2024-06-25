import React from "react";
import { Button,buttonVariants } from "./ui/button";
import Link from "next/link";
import { GitHubLogoIcon,InstagramLogoIcon,DiscordLogoIcon } from '@radix-ui/react-icons'
const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10">
      <div className="w-full absolute left-0 -bottom-72 min-h-96"></div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]"></h1>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Lawrence
        </p>
        <div className=" space-x-3 mt-3 md:mt-0 z-10">
          <Button size='icon'>
            <Link href="https://github.com/0205miss">
            <GitHubLogoIcon />
            </Link>
          </Button>
          <Button asChild size='icon'>
            <Link href="https://www.instagram.com/0205miss">
            <InstagramLogoIcon />
            </Link>
          </Button>
          <Link href="https://discordapp.com/users/kaikai4ni" className={buttonVariants({ variant: "outline" })+' !cursor-pointer'}><DiscordLogoIcon /></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
