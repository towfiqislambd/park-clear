import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/logo/logo.svg";
import Container from "../components/container/Container";
import PrimaryButton from "../components/common/PrimaryButton";

const Navbar = () => {
  const menuItems = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Manage Tickets",
      path: "/manage-ticket",
    },
    {
      id: 3,
      name: "Driver Knowledge Hub",
      path: "/driver-knowledge",
    },
    {
      id: 4,
      name: "about Us",
      path: "/about-us",
    },
    {
      id: 4,
      name: "dashboard",
      path: "/dashboard/overview",
    },
  ];
  const location = useLocation();
  return (
    <header className="py-10 shadow-header-shadow sticky top-0 left-0 w-full z-[50] bg-white">
      <Container>
        <div className="flex items-center justify-between">
          {/* logo  */}
          <Link to={"/"} className="inline-block">
            <img className="w-[200px] h-[52px]" src={Logo} alt="Logo" />
          </Link>
          {/* menu  */}
          <ul className="flex items-center gap-[72px]">
            {
              menuItems?.map((item) => (
                <li key={item?.id}>
                  <NavLink to={`${item?.path}`} className={`text-[18px] font-semibold duration-200 ease-in-out hover:text-theme-sky-blue capitalize ${item?.path === location?.pathname ? 'text-theme-sky-blue' : 'text-menu-color'}`}>{item?.name}</NavLink>
                </li>
              ))
            }
          </ul>
          {/* buttons  */}
          <div className="flex items-center gap-5">
            <PrimaryButton text="Fleet Solution" className="bg-theme-sky-blue hover:text-theme-sky-blue text-white hover:bg-transparent hover:border-theme-sky-blue" pathname="/fleet-solution" />
            <PrimaryButton text="Log in / Register" className="bg-theme-orange hover:text-theme-orange text-white hover:bg-transparent hover:border-theme-orange" pathname="/auth/login" />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
