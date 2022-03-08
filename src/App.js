import "./App.css";
import React from "react";
import "primereact/resources/themes/mdc-dark-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import RouteTable from "./components/routes/RouteTable";

import { LoginModal } from "./components/login/LoginModal";

function App() {
  console.log(process.env);
  // console.log(process.env.secrets.JWT_KEY);
  React.useEffect(() => {}, []);

  return (
    <React.Fragment>
      <RouteTable />

      <LoginModal />
    </React.Fragment>
  );
}

export default App;
