import React from "react";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <header className=" shadow-sm">
      <div className="container mx-auto flex items-center justify-center px-2 py-3 lg:px-4">
        <div className="flex items-center gap-6">
          <Image
            src="/logo-new.svg"
            alt="Logo"
            width="140"
            height="85"
            className="mr-6"
          />
          <div className="flex mr-24 items-center gap-2">
            <IoMdMenu color="#00D094" />
            <span className="text-[#00D094]">Category</span>
          </div>
        </div>

        <div className="relative  mr-24  w-96">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m15.536 15.536 4 4"
                stroke="#333"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
              <circle
                cx="11"
                cy="11"
                r="6.125"
                stroke="#333"
                strokeWidth="1.75"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50   dark:placeholder-gray-400 dark:text-white"
            placeholder="If you’re wondering whether to buy it or not"
            required
          />
        </div>
        <div className="flex items-center gap-6">
          <Image
            src="/home-event.svg"
            alt="home-event"
            width={28}
            height={28}
            className="mr-4"
          />
          <span className="text-gray-600">Login/Sign up</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
