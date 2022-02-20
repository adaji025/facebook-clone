import React from "react";
import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession()
  return (
    <div className="flex sticky top-0 items-center p-2 lg:px-5 bg-white shadow-md z-20">
      {/* left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center bg-gray-100 p-2 rounded-full ">
          <SearchIcon className="h-6 text-gray-600" />
          <input className="hidden md:inline-flex flex-shrink ml-2 bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search Facebook" />
        </div>
      </div>

      {/* center */}
    <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
            <HeaderIcon active Icon={HomeIcon}  />
            <HeaderIcon Icon={FlagIcon}  />
            <HeaderIcon Icon={PlayIcon}  />
            <HeaderIcon Icon={ShoppingCartIcon}  />
            <HeaderIcon Icon={UserGroupIcon}  />
        </div>
    </div>

      {/* right */}
      <div className="flex sm:space-x-2 items-center justify-end">
          {/* profile picture */}
          <Image
          className="rounded-full cursor-pointer"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
          onClick={signOut}
        />

          <p className="whitespace-nowrap font-semibold pr-3">{session.user.name}</p>
          <ViewGridIcon className='icon' />
          <BellIcon className='icon' />
          <ChatIcon className='icon' />
          <ChevronDownIcon className='icon' />
      </div>
    </div>
  );
};

export default Header;
