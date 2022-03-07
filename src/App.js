import "./App.css";
import React from "react";

import RouteTable from "./components/routes/RouteTable";
import "flowbite";
import { ToastContainer } from "react-toastify";
import { LoginModal } from "./components/login/LoginModal";

function App() {
  console.log(process.env);
  // console.log(process.env.secrets.JWT_KEY);
  React.useEffect(() => {}, []);

  return (
    <React.Fragment>
      <RouteTable />
      <ToastContainer />
      <LoginModal />
    </React.Fragment>
  );
}

export default App;
