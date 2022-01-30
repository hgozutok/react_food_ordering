import React from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../../services/LoginService";
import { useDispatch, useSelector } from "react-redux";
import { token, setUserInfos } from "../redux/slices/UserSlices";

export const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const dispatch = useDispatch();

  const existingToken = useSelector((state) => state.user.token);

  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data);
    registerUser(data).then((response) => {
      if (response.status === 200) {
        //  console.log(response.data);
        dispatch(token(response.data.token));
        dispatch(setUserInfos(response.data));
        localStorage.setItem("token", response.data.token);
        // console.log(existingToken);
      }
    });
  };

  return (
    <div
      className="flex  flex-col  justify-center items-center content-center 
    h-[calc(100%-4rem)] w-full "
    >
      <div
        className="flex  flex-col  justify-center content-center
      items-center   rounded-lg   p-4  m-4
      al  w-80   h-[500px] loginShadow
       text-gray-900 bg-gray-300  dark:bg-gray-900   "
      >
        <h1>Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col ">
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
              {...register("password", { required: true, maxLength: 20 })}
            />
            <span className="text-red-600	">
              {errors.password?.type === "required" && "Password is required"}
            </span>
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: true,
                maxLength: 20,
              })}
            />
            <span className="text-red-600	">
              {errors.confirmPassword?.type === "required" &&
                "Confirm Password is required"}
            </span>
          </div>
          <div className="flex flex-col">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              {...register("firstName", { required: true, maxLength: 20 })}
            />
            <span className="text-red-600	">
              {errors.firstName?.type === "required" &&
                "First Name is required"}
            </span>
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              {...register("lastName", { required: true, maxLength: 20 })}
            />
            <span className="text-red-600	">
              {errors.lastName?.type === "required" && "Last Name is required"}
            </span>
          </div>
          <input
            className="bg-fuchsia-800 w-full rounded-lg text-white p-2"
            type="submit"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
};
