import Image from "next/image";
import React from "react";
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";

function TopHeader() {
  return (
    <div className="bg-amazon_blue flex items-center p-1 flex-grow py-2">
      <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
        <Image
          src="https://links.papareact.com/f90"
          width={150}
          height={40}
          objectFit="contain"
          className="cursor-pointer"
        />
      </div>
      <div className="hidden sm:flex bg-yellow-400 hover:bg-yellow-500 cursor-pointer items-center h-10 rounded-md flex-grow">
        <input
          type="text"
          className="p-2 h-full w-6 flex-grow rounded-l-md focus:outline-none px-4"
        />
        <SearchIcon className="h-12 p-4" />
      </div>
      <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap md:text-sm">
        <div className="link">
          <p>Hello Ayman Ashraf</p>
          <p className="font-extrabold">Account & Lists</p>
        </div>
        <div className="link">
          <p>Returns</p>
          <p className="font-extrabold">& Orders</p>
        </div>
        <div className="link relative flex items-center">
          <span className="absolute top-0 right-0 sm:right-10 h-4 w-4 bg-yellow-400 text-center text-black rounded-full font-bold">
            0
          </span>
          <ShoppingCartIcon className="h-10" />
          <p className="font-extrabold mt-2 hidden sm:inline-flex">Basket</p>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
