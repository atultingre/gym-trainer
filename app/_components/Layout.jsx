import React from "react";
import NavigationBar from "./NavigationBar";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="mb-20">
        <NavigationBar />
      </div>
      <main className="flex min-h-screen px-5 py-5">{children}</main>
    </div>
  );
};

export default Layout;
