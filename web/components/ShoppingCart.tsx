import Link from "next/link";
import React, { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import CartIcon from "./icons/CartIcon";

function ShoppingCart({
  onClick,
  isOpen,
}: {
  onClick: () => void;
  isOpen: boolean;
}) {
  return (
    <>
      <button onClick={onClick}>
        <CartIcon className="w-6 h-6" />
      </button>

      <div
        className={`h-screen w-[85vw] fixed z-20 border-t duration-700 ease-out ${
          isOpen ? "-right-[0%]" : "-right-[100%]"
        }  top-0 bg-white flex justify-center items-center`}
      >
        <button onClick={onClick} className="absolute right-2 top-2">
          <HiXMark className="text-3xl" />
        </button>
        <ul></ul>
        <Link
          href="/checkout"
          onClick={onClick}
          className="bg-fuchsia-200 px-4 py-2 rounded-full font-semibold"
        >
          Checkout
        </Link>
      </div>
    </>
  );
}

export default ShoppingCart;
