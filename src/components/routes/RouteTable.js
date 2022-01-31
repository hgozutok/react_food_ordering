import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import { HomePage } from "../pages/Home";

import { LoginOrRegister } from "../pages/LoginorRegister";

function RouteTable() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Layout>
            {" "}
            <HomePage />{" "}
          </Layout>
        }
      ></Route>
      <Route
        path="/order/new"
        element={<Layout> {/* <NewOrder />{" "} */}</Layout>}
      ></Route>
      <Route
        path="/products/all"
        element={<Layout> {/* <Products />{" "} */}</Layout>}
      ></Route>
      {/* <Route
        path="/products/"
        element={
          <Layout>
            {" "}
            <Products />{" "}
          </Layout>
        }
      ></Route> */}
      <Route
        path="/products/product/:id/"
        element={<Layout> {/* <Product />{" "} */}</Layout>}
      ></Route>
      <Route
        path="/login"
        element={
          <Layout>
            {" "}
            <LoginOrRegister />{" "}
          </Layout>
        }
      ></Route>
    </Routes>
  );
}

export default RouteTable;
