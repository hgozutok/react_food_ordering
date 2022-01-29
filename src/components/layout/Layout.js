import React from "react";
import { useSelector } from "react-redux";
import Navigation from "../navigation/Navigation";

function Layout({ children }) {
  const theme = useSelector((state) => state.theme);
  return (
    <div
      className={
        theme.theme === "dark"
          ? "bg-slate-800 h-screen w-screen text-white"
          : "bg-neutral-100 h-screen w-screen"
      }
    >
      <Navigation />
      {children}
    </div>
  );
}

export default Layout;
