import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar/NavBar";

const AppLayout = () => {
  return (
    <>
      <header className="h-[105px] flex justify-center font-secondary text-md">
        <NavBar />
      </header>
      <main className="overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
