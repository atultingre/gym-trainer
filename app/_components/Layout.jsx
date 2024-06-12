import React from "react";
import NavigationBar from "./NavigationBar/NavigationBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      <main className="flex min-h-screen px-5 ">
        {children}
      </main>
    </div>
  );
};

export default Layout;
