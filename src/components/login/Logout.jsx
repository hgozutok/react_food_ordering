import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../redux/slices/UserSlices";

export const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  React.useEffect(() => {
    dispatch(logOut());
    navigate("/");
  }, [dispatch, navigate, user.token]);

  return <div>You are logged out</div>;
};
