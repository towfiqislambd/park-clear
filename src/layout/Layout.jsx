import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import BackToTop from "../components/common/BackToTop";

const Layout = () => {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Layout;
