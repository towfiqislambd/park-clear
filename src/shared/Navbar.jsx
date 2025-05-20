import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/logo/logo.svg";
import Container from "../components/container/Container";
import PrimaryButton from "../components/common/PrimaryButton";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
const menuItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Manage Tickets",
    path: "/dashboard/ticket-management",
  },
  {
    id: 3,
    name: "Driver Knowledge Hub",
    path: "https://parkclear-nwxx.vercel.app",
  },
  {
    id: 4,
    name: "about",
    path: "/about-us",
  },
  {
    id: 5,
    name: "FlexiRide",
    path: "https://joelmfuri-rcsxdu.mysharetribe-test.com/",
  },
];

const Navbar = ({ isOpen, setOpen }) => {
  const location = useLocation();
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <header
      className="py-4 md:py-5 3xl:py-7 shadow-header-shadow sticky top-0 left-0 w-full z-[10] bg-white"
      data-aos="fade-down"
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* logo  */}
          <Link to={"/"} className="inline-block">
            <img
              className="w-[150px] md:w-[170px] 2xl:w-[130px] 3xl:w-[200px] h-[40px] md:h-[42px] 3xl:h-[52px]"
              src={Logo}
              alt="Logo"
            />
          </Link>

          {/* menus  */}
          <ul className="hidden 2xl:flex items-center gap-10 3xl:gap-[65px]">
            {menuItems?.map(item => {
              const isExternal = item.path.startsWith("http");
              return (
                <li key={item?.id}>
                  <NavLink
                    to={item.path}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={`2xl:text-[15px] 3xl:text-[18px] font-semibold duration-200 ease-in-out hover:text-theme-sky-blue capitalize ${
                      item?.path === location?.pathname
                        ? "text-theme-sky-blue"
                        : "text-menu-color"
                    }`}
                  >
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* buttons  */}
          <div className="hidden 2xl:flex items-center gap-3 3xl:gap-5">
            <PrimaryButton
              text="Fleet Solutions"
              className="bg-theme-sky-blue hover:text-theme-sky-blue text-white hover:bg-transparent hover:border-theme-sky-blue"
              pathname="https://parkclear-fleet-hub.lovable.app/"
            />
            <PrimaryButton
              text="Log in / Register"
              className="bg-theme-orange hover:text-theme-orange text-white hover:bg-transparent hover:border-theme-orange"
              pathname="/auth/login"
            />
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={() => setOpen(!isOpen)}
            className="2xl:hidden bg-theme-sky-blue text-white w-9 h-9 md:w-10 md:h-10 rounded grid place-items-center"
          >
            <FaBars className="text-[22px] md:text-2xl" />
          </button>
        </div>

        {/* ============ Mobile Config ============ */}

        {/* Blur Overlay */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 bg-black/30 backdrop-blur-sm max-h-screen min-h-screen transition-opacity duration-300 2xl:hidden z-[999] ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        ></div>

        {/* Mobile Sidebar */}
        <div
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } duration-500 transition-transform fixed top-0 z-[9999] left-0 bg-white p-5 lg:p-7 shadow-lg overflow-y-auto  border-r max-h-screen min-h-screen w-[250px] lg:w-[270px] 2xl:hidden`}
        >
          {/* logo */}
          <Link to={"/"} className="block pt-3">
            <img className="w-[180px] h-[42px]" src={Logo} alt="Logo" />
          </Link>

          {/* Menus */}
          <ul className="flex flex-col gap-7 md:gap-8 mt-10 mb-10 md:mb-11">
            {menuItems?.map(item => {
              const isExternal = item.path.startsWith("http");
              return (
                <li key={item?.id}>
                  <NavLink
                    to={item.path}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    onClick={() => setOpen(false)}
                    className={`3xl:text-[18px] font-semibold duration-200 ease-in-out hover:text-theme-sky-blue capitalize ${
                      item?.path === location?.pathname
                        ? "text-theme-sky-blue"
                        : "text-menu-color"
                    }`}
                  >
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* buttons  */}
          <div className="flex flex-col gap-3">
            <PrimaryButton
              text="Fleet Solution"
              onClick={() => setOpen(false)}
              className="bg-theme-sky-blue hover:text-theme-sky-blue text-white hover:bg-transparent hover:border-theme-sky-blue"
              pathname="/fleet-solution"
            />
            <PrimaryButton
              text="Log in / Register"
              onClick={() => setOpen(false)}
              className="bg-theme-orange hover:text-theme-orange text-white hover:bg-transparent hover:border-theme-orange"
              pathname="/auth/login"
            />
          </div>

          {/* Cancel btn */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3"
          >
            <RxCross2 className="text-xl" />
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
