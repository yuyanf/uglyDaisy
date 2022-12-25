import React, { useState } from "react";
import { HiOutlineShoppingBag, HiXMark } from "react-icons/hi2";

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
        <HiOutlineShoppingBag className="text-2xl" />
      </button>

      <div
        className={`h-screen w-[85vw] fixed z-20 border-t duration-700 ease-out ${
          isOpen ? "-right-[0%]" : "-right-[100%]"
        }  top-0 bg-white`}
      >
        fewf
        <button onClick={onClick} className="absolute right-2 top-2">
          <HiXMark className="text-3xl" />
        </button>
      </div>
    </>
  );
}

export default ShoppingCart;
