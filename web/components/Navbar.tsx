import Link from "next/link";
import React from "react";
import { GiJewelCrown } from "react-icons/gi";
import { HiUser, HiHeart, HiShoppingCart } from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav className="py-2 px-6 bg-violet-200 ">
      <div className="flex max-w-3xl justify-between mx-auto">
        <GiJewelCrown />
        <ul className="flex gap-8 ">
          <li className="group hover:bg-fuchsia-300 p-3 rounded-full duration-300">
            <Link href="/" className="flex flex-col items-center relative">
              <HiUser className="text-2xl text-gray-800" />
              <span className="absolute text-sm duration-300 text-slate-500 group-hover:opacity-100 pointer-events-none -bottom-12 whitespace-nowrap opacity-0 bg-fuchsia-300 rounded-md px-2 py-1">
                User Account
              </span>
            </Link>
          </li>
          <li className="group hover:bg-fuchsia-300 p-3 rounded-full duration-300">
            <Link href="/" className="flex flex-col items-center relative">
              <HiHeart className="text-2xl text-gray-800" />
              <span className="absolute text-sm duration-300 text-slate-500 group-hover:opacity-100 pointer-events-none -bottom-12 whitespace-nowrap opacity-0 bg-fuchsia-300 rounded-md px-2 py-1">
                Wishlist
              </span>
            </Link>
          </li>
          <li className="group hover:bg-fuchsia-300 p-3 rounded-full duration-300">
            <Link href="/" className="flex flex-col items-center relative">
              <HiShoppingCart className="text-2xl text-gray-800" />
              <span className="absolute text-sm duration-300 text-slate-500 group-hover:opacity-100 pointer-events-none -bottom-12 whitespace-nowrap opacity-0 bg-fuchsia-300 rounded-md px-2 py-1">
                Shopping Cart
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
