import React, { useState } from "react";
import { GiDaisy } from "react-icons/gi";
import BackDrop from "./BackDrop";
import ShoppingCart from "./ShoppingCart";
import UserAccount from "./UserAccount";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="flex bg-white shadow-lg justify-between py-2 px-3">
        <GiDaisy className="text-2xl" />
        <ul className="flex gap-3">
          <li>
            <UserAccount></UserAccount>
          </li>
          <li> wishList </li>
          <li>
            <ShoppingCart onClick={handleClick} isOpen={isOpen}></ShoppingCart>
          </li>
        </ul>
      </nav>
      {isOpen && <BackDrop />}
    </>
  );
};

export default NavBar;
