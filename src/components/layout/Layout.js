import React from "react";
import { useSelector } from "react-redux";
import Navigation from "../navigation/Navigation";

function Layout({ children }) {
  const theme = useSelector((state) => state.theme);
  return (
    <div
      className={
        theme.theme === "dark"
          ? "bg-slate-800 h-full w-full text-white"
          : "bg-neutral-100 h-full w-full"
      }
    >
      <Navigation />
      {children}
    </div>
  );
}

export default Layout;
