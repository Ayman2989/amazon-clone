import { MenuIcon } from "@heroicons/react/outline";
import React from "react";

function BottomHeader() {
  return (
    <div className="bg-amazon_blue-light text-white text-sm flex items-center space-x-3 p-2 pl-6">
      <p className="flex items-center link">
        <MenuIcon className="h-6 mr-1" />
        All
      </p>
      <p className="link">Prime Video</p>
      <p className="link">Amazon Businnnes</p>
      <p className="link">Todays's Deals</p>
      <p className="link hidden lg:inline-flex">Electronics</p>
      <p className="link hidden lg:inline-flex">Food & Grocery</p>
      <p className="link hidden lg:inline-flex">Electronics</p>
      <p className="link hidden lg:inline-flex">Prime</p>
      <p className="link hidden lg:inline-flex">Buy Again</p>
      <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
      <p className="link hidden lg:inline-flex">Health& Personal Care</p>
    </div>
  );
}

export default BottomHeader;
