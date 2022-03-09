import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import { HomePage } from "../pages/Home";

import { LoginOrRegister } from "../pages/LoginorRegister";
import { Menus } from "../pages/Menus";
import { MenuDetail } from "../pages/MenuDetail";
import { Logout } from "../login/Logout";
import { CartPage } from "../pages/CartPage";

function RouteTable() {
  const options = {
    clientSecret: "sk_test_u7nRb1Q7LLtLAtIHB9GQZ2TV00nhUCeEFQ",
  };
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
        path="/menus/menudetail/:id/"
        element={
          <Layout>
            {" "}
            <MenuDetail />{" "}
          </Layout>
        }
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
      <Route
        path="/logout"
        element={
          <Layout>
            {" "}
            <Logout />{" "}
          </Layout>
        }
      ></Route>
      <Route
        path="/menus"
        element={
          <Layout>
            {" "}
            <Menus />{" "}
          </Layout>
        }
      ></Route>
      <Route
        path="/cart"
        element={
          <Layout>
            {" "}
            <CartPage />
          </Layout>
        }
      ></Route>
    </Routes>
  );
}

export default RouteTable;
