import React from "react";
import Sidebar from "./SideBar";
import { Outlet } from "react-router-dom"; // To render nested routes

function Layout() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar /> {/* Sidebar Component */}
      <div style={{ marginLeft: "250px", padding: "20px", flex: 1 }}>
        {/* This will render the content based on the current route */}
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
