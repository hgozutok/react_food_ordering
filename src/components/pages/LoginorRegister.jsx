import React from "react";
import { Register } from "../login/Register";
import { LoginPage } from "../login/login";
export const LoginOrRegister = () => {
  return (
    <div
      className="flex flex-col justify-center items-center 
    h-[calc(100%-4rem)] w-full "
    >
      <h1 className="text-lg">Login</h1>
      <div className="flex flex-wrap -mx-2 overflow-hidden">
        <div className="my-2 px-2 w-1/2 overflow-hidden sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <LoginPage />
        </div>

        <div className="my-2 px-2 w-1/2 overflow-hidden sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <Register />
        </div>
      </div>
    </div>
  );
};
