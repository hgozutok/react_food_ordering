import "./App.css";
import React from "react";

import RouteTable from "./components/routes/RouteTable";

function App() {
  console.log(process.env);
  console.log(process.env.secrets.JWT_KEY);
  React.useEffect(() => {}, []);

  return (
    <React.Fragment>
      <RouteTable />
    </React.Fragment>
  );
}

export default App;
