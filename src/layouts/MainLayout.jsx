import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div className="max-w-11/12 mx-auto">
      <Header></Header>
      <Outlet></Outlet>
      <h1>footer</h1>
    </div>
  );
};

export default MainLayout;
