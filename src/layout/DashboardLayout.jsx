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
} from "../components/svg-container/SvgContainer";

const navItems = [
  { to: "/dashboard/overview", label: "Overview", Icon: DashboardOverview },
  { to: "/dashboard/appeal", label: "Appeal", Icon: DashboardAppeal },
  {
    to: "/dashboard/ticket-management",
    label: "Ticket Management",
    Icon: DashboardTicketManagement,
  },
  { to: "/dashboard/virtual-assistant", label: "Virtual Assistant", Icon: DashboardChatBot },
  {
    to: "/dashboard/subscription-services",
    label: "Subscription Services",
    Icon: DashboardSubscription,
  },
  { to: "/dashboard/settings", label: "Settings", Icon: DashboardSettings },
];

const DashboardLayout = () => {
  return (
    <section className="flex h-screen dark:bg-black ">
      {/* Sidebar */}
      <aside className="w-[290px] 4xl:!w-[320px] h-full p-5 4xl:p-7 border-r border-default-border dark:border-gray-700 overflow-y-auto scrollbar-hide">
        {/* Logo */}
        <Link to="/">
          <figure>
            <img src={logo} alt="logo" className="object-cover" />
          </figure>
        </Link>

        {/* Navigation Links */}
        <ul className="space-y-6 mt-7">
          {navItems.map(({ to, label, Icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `flex gap-2  items-center w-full text-[17px] font-medium py-2.5 px-3 4xl:px-4 rounded transition-all duration-300 ease-in-out ${isActive
                    ? "bg-theme-orange text-white"
                    : "text-menu-color dark:text-white dark:hover:bg-gray-800 hover:bg-gray-100 hover:shadow"
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
            </li>
          ))}
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
      <main className="bg-dashboard-outlet-bg dark:bg-black h-full overflow-y-auto p-7 flex-grow">
        <Outlet />
      </main>
    </section>
  );
};

export default DashboardLayout;
