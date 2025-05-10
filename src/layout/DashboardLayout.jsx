/* eslint-disable no-unused-vars */
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo/logo.svg";
import s1 from "../assets/images/s1.png";
import s2 from "../assets/images/s2.png";
import sideLogoOne from "../assets/logo/sidebarLogoOne.png";
import sideLogoTwo from "../assets/logo/sidebarLogoTwo.png";

import {
  DashboardAppeal,
  DashboardChatBot,
  DashboardOverview,
  DashboardSettings,
  DashboardSubscription,
  DashboardTicketManagement,
  VehicleManagement,
} from "../components/svg-container/SvgContainer";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const navItems = [
  { to: "/dashboard/overview", label: "Overview", Icon: DashboardOverview },
  { to: "/dashboard/appeal", label: "Appeal", Icon: DashboardAppeal },
  {
    to: "/dashboard/ticket-management",
    label: "Ticket Management",
    Icon: DashboardTicketManagement,
  },
  { to: "https://parkclear.org", label: "Virtual Assistant", Icon: DashboardChatBot },
  {
    to: "/dashboard/subscription-services",
    label: "Subscription Services",
    Icon: DashboardSubscription,
  },
  { to: "/vehicle-management", label: "Vehicle Management", Icon: VehicleManagement },
  { to: "/dashboard/settings", label: "Settings", Icon: DashboardSettings },
];

const DashboardLayout = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="h-screen flex flex-col">
      {/* Header */}
      <header className="2xl:hidden py-1 px-5 md:px-10 border-b fixed h-[70px] xl:h-[80px] w-full left-0 top-0 z-50 bg-white">
        <nav className="w-full h-full flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <figure className="w-[135px] md:w-[150px]">
              <img src={logo} alt="logo" className="object-cover w-full" />
            </figure>
          </Link>
          {/* Hamburger btn */}
          <button
            onClick={() => setOpen(!isOpen)}
            className="bg-theme-sky-blue 2xl:hidden text-white w-10 xl:w-11 h-9 xl:h-10 rounded grid place-items-center"
          >
            <FaBars className="text-2xl" />
          </button>
        </nav>
      </header>

      {/* Main */}
      <div className="flex dark:bg-black mt-[70px] xl:mt-[80px] 2xl:mt-0 h-[calc(100vh-70px)] xl:h-[calc(100vh-80px)] 2xl:h-full">
        {/* Sidebar */}
        <aside className="hidden 2xl:block 2xl:w-[290px] flex-shrink-0 4xl:!w-[320px] h-full p-5 4xl:p-7 border-r border-default-border dark:border-gray-700 overflow-y-auto scrollbar-hide">
          {/* Logo */}
          <Link to="/">
            <figure className="">
              <img src={logo} alt="logo" className="object-cover" />
            </figure>
          </Link>

          {/* Navigation Links */}
          <ul className="space-y-6 mt-7">
            {navItems.map(({ to, label, Icon }) => {
              const isExternal = to.startsWith('http');

              return (
                <li key={to}>
                  {isExternal ? (
                    <a
                      href={to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-2 items-center w-full text-[17px] font-medium py-2.5 px-3 4xl:px-4 rounded transition-all duration-300 ease-in-out text-menu-color dark:text-white dark:hover:bg-gray-800 hover:bg-gray-100 hover:shadow"
                    >
                      <Icon isActive={false} />
                      <span>{label}</span>
                    </a>
                  ) : (
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        `flex gap-2 items-center w-full text-[17px] font-medium py-2.5 px-3 4xl:px-4 rounded transition-all duration-300 ease-in-out ${isActive
                          ? 'bg-theme-orange text-white'
                          : 'text-menu-color dark:text-white dark:hover:bg-gray-800 hover:bg-gray-100 hover:shadow'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <Icon isActive={isActive} />
                          <span>{label}</span>
                        </>
                      )}
                    </NavLink>
                  )}
                </li>
              );
            })}

          </ul>

          {/* Sidebar Cards */}
          <section className="space-y-6 4xl:space-y-9 mt-10">
            {/* Card 1 */}
            <div
              style={{
                backgroundImage: `url(${s1})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="text-center h-[341.618px] flex flex-col justify-center items-center rounded-xl"
            >
              <img src={sideLogoOne} alt="logo" className="" />
              <h3 className="text-white text-xl py-2 font-semibold">
                ParkClear Pro
              </h3>
              <p className="font-inter text-[15px] mb-7 text-white font-medium max-w-[155.966px] mx-auto">
                Get <span className="text-lg font-semibold">15%</span> off upgrade
                to pro Subscription
              </p>
              <button className="px-10 cursor-pointer bg-white text-theme-orange text-lg font-semibold py-2 rounded-lg">
                Get Pro
              </button>
            </div>

            {/* Card 2 */}
            <div className="text-center border border-default-border py-7 px-7 rounded-xl">
              <img src={sideLogoTwo} alt="logo" className="mx-auto" />
              <h3 className="text-xl 4xl:text-2xl text-dashboard-common-heading dark:text-white py-3 font-bold">
                Car Screen Wash Coupon
              </h3>
              <p className="text-sidebar-card-desc mb-5 dark:text-gray-300">
                If you subscribe today you will get a free 10L of car screen wash{" "}
              </p>
              <h4 className="text-sidebar-card-headingOne text-xl 4xl:text-2xl font-bold mb-2 4xl:mb-2.5">
                12:54:00
              </h4>
              <h4 className="text-sidebar-card-headingTwo text-xl 4xl:text-2xl font-bold">
                Activated
              </h4>
            </div>

            {/* Card 3 */}
            <div
              style={{
                backgroundImage: `url(${s2})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="text-center h-[341.618px] flex flex-col justify-center items-center rounded-xl"
            >
              <img src={sideLogoOne} alt="logo" className="" />
              <h3 className="text-white text-xl py-2 font-semibold">
                Ultra Drive Store
              </h3>
              <p className="font-inter text-[15px] mb-7 text-white font-medium max-w-[155.966px] mx-auto">
                Your Coupon Code
              </p>
              <button className="px-10 cursor-pointer bg-white text-theme-orange text-lg font-semibold py-2 rounded-lg">
                *******
              </button>
            </div>
          </section>
        </aside>

        {/* Main Content */}
        <main className="bg-dashboard-outlet-bg dark:bg-black h-full overflow-y-auto p-3.5 md:p-5 xl:p-7 flex-grow">
          <Outlet />
        </main>
      </div>


      {/* ================= For Mobile Version ================ */}
      {/* Blur Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 2xl:hidden z-[999] ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      </div>

      {/* Mobile Sidebar */}
      <aside className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} duration-500 transition-transform fixed top-0 z-[999] left-0 bg-white p-4 xl:p-5 overflow-y-auto  border-r border-default-border dark:border-gray-700 max-h-screen min-h-screen w-[275px] xl:w-[290px] 2xl:hidden scrollbar-hide`}>

        {/* Logo */}
        <Link to="/">
          <figure className="w-[170px]">
            <img src={logo} alt="logo" className="object-cover w-full" />
          </figure>
        </Link>

        {/* Navigation Links */}
        <ul className="space-y-4 md:space-y-5 xl:space-y-6 mt-7">
          {navItems.map(({ to, label, Icon }) => {
            const isExternal = to.startsWith('http');

            return (
              <li key={to}>
                {isExternal ? (
                  <a
                    href={to}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex gap-2 items-center w-full xl:text-[17px] font-medium py-2 md:py-2.5 px-3 4xl:px-4 rounded transition-all duration-300 ease-in-out text-menu-color dark:text-white dark:hover:bg-gray-800 hover:bg-gray-100 hover:shadow"
                  >
                    <Icon isActive={false} />
                    <span>{label}</span>
                  </a>
                ) : (
                  <NavLink
                    to={to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex gap-2 items-center w-full xl:text-[17px] font-medium py-2 md:py-2.5 px-3 4xl:px-4 rounded transition-all duration-300 ease-in-out ${isActive
                        ? 'bg-theme-orange text-white'
                        : 'text-menu-color dark:text-white dark:hover:bg-gray-800 hover:bg-gray-100 hover:shadow'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <Icon isActive={isActive} />
                        <span>{label}</span>
                      </>
                    )}
                  </NavLink>
                )}
              </li>
            );
          })}

        </ul>

        {/* Sidebar Cards */}
        <section className="space-y-6 4xl:space-y-9 mt-7 xl:mt-10">
          {/* Card 1 */}
          <div
            style={{
              backgroundImage: `url(${s1})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="text-center h-[290px] xl:h-[341.618px] flex flex-col justify-center items-center rounded-xl"
          >
            <img src={sideLogoOne} alt="logo" className="" />
            <h3 className="text-white text-xl py-2 font-semibold">
              ParkClear Pro
            </h3>
            <p className="font-inter text-[15px] mb-7 text-white font-medium max-w-[155.966px] mx-auto">
              Get <span className="text-lg font-semibold">15%</span> off upgrade
              to pro Subscription
            </p>
            <button className="px-10 cursor-pointer bg-white text-theme-orange text-lg font-semibold py-2 rounded-lg">
              Get Pro
            </button>
          </div>

          {/* Card 2 */}
          <div className="text-center border border-default-border py-5 xl:py-7 px-7 rounded-xl">
            <img src={sideLogoTwo} alt="logo" className="mx-auto" />
            <h3 className="text-lg xl:text-xl 4xl:text-2xl text-dashboard-common-heading dark:text-white py-3 font-bold">
              Car Screen Wash Coupon
            </h3>
            <p className="text-sidebar-card-desc mb-3 xl:mb-5 dark:text-gray-300 text-sm xl:text-base">
              If you subscribe today you will get a free 10L of car screen wash{" "}
            </p>
            <h4 className="text-sidebar-card-headingOne text-xl 4xl:text-2xl font-bold mb-1 xl:mb-2 4xl:mb-2.5">
              12:54:00
            </h4>
            <h4 className="text-sidebar-card-headingTwo text-xl 4xl:text-2xl font-bold">
              Activated
            </h4>
          </div>

          {/* Card 3 */}
          <div
            style={{
              backgroundImage: `url(${s2})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="text-center h-[290px] xl:h-[341.618px] flex flex-col justify-center items-center rounded-xl"
          >
            <img src={sideLogoOne} alt="logo" className="" />
            <h3 className="text-white text-xl py-2 font-semibold">
              Ultra Drive Store
            </h3>
            <p className="font-inter text-[15px] mb-7 text-white font-medium max-w-[155.966px] mx-auto">
              Your Coupon Code
            </p>
            <button className="px-10 cursor-pointer bg-white text-theme-orange text-lg font-semibold py-2 rounded-lg">
              *******
            </button>
          </div>
        </section>

        {/* Close btn */}
        <button onClick={() => setOpen(false)} className="absolute top-3 right-3">
          <RxCross2 className="text-xl" />
        </button>
      </aside>
    </section>
  );
};

export default DashboardLayout;
