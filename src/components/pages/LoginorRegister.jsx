import React from "react";
import { Register } from "../login/Register";
import { LoginPage } from "../login/login";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const LoginOrRegister = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const userI = useSelector((state) => state.user.user);

  React.useEffect(() => {
    if (userI) {
      navigate("/");
    }
  }, [navigate, userI]);

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
