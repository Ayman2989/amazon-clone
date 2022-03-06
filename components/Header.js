import React from "react";
import BottomHeader from "./BottomHeader";
import TopHeader from "./TopHeader";

function Header() {
  return (
    <header>
      <div>
        <TopHeader />
      </div>
      <div>
        <BottomHeader />
      </div>
    </header>
  );
}

export default Header;
