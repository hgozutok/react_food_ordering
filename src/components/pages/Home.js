import React from "react";
import { SingleSlider } from "../SingleSlider";

export const HomePage = () => {
  return (
    <div>
      <section className="w-full px-6 pb-12 antialiased bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center">
            <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
              <span className="inline md:block">
                Start Ordering Your Favorite
              </span>{" "}
              <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block">
                Foods Online
              </span>
            </h1>
            <div className="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg">
              With the best prices and the best food, we are here to help you!
            </div>
            <div className="flex flex-col items-center mt-12 text-center">
              <span className="relative inline-flex w-full md:w-auto">
                <a
                  href="#_"
                  type="button"
                  className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                >
                  Start Now
                </a>
                <span className="absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-green-400 rounded-full">
                  <i className="fa fa-thumb-tack" aria-hidden="true"></i>
                </span>
              </span>
              <a href="#" className="mt-3 text-sm text-indigo-500">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="bg-white dark:bg-black  w-[500]">
        <SingleSlider />
        <h1 className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </h1>
      </div> */}
    </div>
  );
};
