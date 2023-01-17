import React from "react";

const BackDrop = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      onClick={onClick}
      className="z-10 bg-violet-200/70 w-screen h-screen top-0 left-0 fixed"
    ></div>
  );
};

export default BackDrop;
