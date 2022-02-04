import React from "react";
import { Register } from "../login/Register";
import { LoginPage } from "../login/login";
export const LoginOrRegister = () => {
  return (
    <div
      className="grid grid-flow-row justify-center items-center
    h-screen w-full "
    >
      <h1 className="text-lg">Login</h1>
      <div className=" overflow-hidden grid grid-flow-row grid-cols-1 grid-rows-2 md:grid-cols-2">
        <div>
          <LoginPage />
        </div>

        <div className="my-2 px-2 w-1/2 overflow-hidden sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
          <Register />
        </div>
      </div>
    </div>
  );
};
