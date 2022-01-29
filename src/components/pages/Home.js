import React from "react";
import { SingleSlider } from "../SingleSlider";

export const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>

      <div className="bg-white dark:bg-black  w-[500]">
        <SingleSlider />
        <h1 className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </h1>
      </div>
    </div>
  );
};
