import React from "react";
import { useForm } from "react-hook-form";
import { loginUser, userRegister } from "../../services/LoginService";
import { useDispatch, useSelector } from "react-redux";
import { token, userInfos } from "../redux/slices/UserSlices";

export const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // const { loginUser, userRegister } = LoginService;
  const dispatch = useDispatch();
  const existingToken = useSelector((state) => state.token);

  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data);
    loginUser(data).then((response) => {
      if (response.status === 200) {
        console.log(response.data.token);
        console.log(dispatch(token(response.data.token)));

        console.log(existingToken);
        if (token == "") {
          dispatch(token(response.data.token));
          dispatch(userInfos(response.data.user));
        }
      }
    });

    console.log(existingToken);
  };
  return (
    <div
      className="flex  flex-col  justify-center items-center content-center 
    h-[calc(100%-4rem)] w-full "
    >
      <div
        className="flex  flex-col  justify-center content-center
      items-center  bg-gray-300  rounded-lg  shadow-lg  p-4  m-4
      al  w-80   h-56  
       loginShadow
"
      >
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register("email", { required: true, maxLength: 20 })}
            />
            <span className="text-red-600	">
              {errors.email?.type === "required" && "Email is required"}
            </span>
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                // pattern: /^[A-Za-z]+$/i,
              })}
            />
            <span className="text-red-600	">
              {errors.password?.type === "required" && "Password is required"}
            </span>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};
