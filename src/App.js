import "./App.css";
import React from "react";
import "primereact/resources/themes/mdc-dark-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import RouteTable from "./components/routes/RouteTable";

import { LoginModal } from "./components/login/LoginModal";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

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
