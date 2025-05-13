import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import BackToTop from "../components/common/BackToTop";
import { useState } from "react";

const Layout = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ScrollRestoration />
      <Navbar isOpen={isOpen} setOpen={setOpen} />
      <Outlet />
      <Footer />
      <BackToTop isOpen={isOpen} />
    </>
  );
};

export default Layout;
