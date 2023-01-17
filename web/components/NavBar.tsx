import React, { useState } from "react";
import { GiDaisy } from "react-icons/gi";
import BackDrop from "./BackDrop";
import UserIcon from "./icons/UserIcon";
import WishIcon from "./icons/WishIcon";
import ShoppingCart from "./ShoppingCart";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="flex bg-white shadow-lg justify-between py-3 px-4">
        <div className="text-xl font-roboto font-bold">UGLY DAISY</div>
        <ul className="flex gap-6">
          <li className="flex items-center">
            <UserIcon className="w-6 h-6" />
          </li>
          <li className="flex items-center">
            <WishIcon className="w-6 h-6" />
          </li>
          <li className="flex items-center">
            <ShoppingCart onClick={handleClick} isOpen={isOpen}></ShoppingCart>
          </li>
        </ul>
      </nav>
      {isOpen && <BackDrop onClick={handleClick} />}
    </>
  );
};

export default NavBar;
