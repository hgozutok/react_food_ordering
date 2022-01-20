import logo from "./logo.svg";
import "./App.css";
import React from "react";

import RouteTable from "./components/routes/RouteTable";
import { HomePage } from "./components/pages/Home";

function App() {
  React.useEffect(() => {}, []);

  return (
    <React.Fragment>
      <RouteTable />
      {/* <HomePage /> */}
    </React.Fragment>
  );
}

export default App;
