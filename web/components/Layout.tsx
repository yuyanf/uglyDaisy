import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="px-6 bg-slate-100 w-screen min-h-screen">
        {children}
      </main>
    </>
  );
};

export default Layout;
