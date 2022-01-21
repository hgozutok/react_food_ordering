import "./App.css";
import React from "react";

import RouteTable from "./components/routes/RouteTable";

function App() {
  React.useEffect(() => {}, []);

  return (
    <React.Fragment>
      <RouteTable />
    </React.Fragment>
  );
}

export default App;
