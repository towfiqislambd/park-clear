import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo/logo-footer.svg";
import SocialMedia from "../components/footer/SocialMedia";
const menuItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Manage Tickets",
    path: "manage-ticket",
  },
  {
    id: 3,
    name: "Driver Knowledge Hub",
    path: "driver-knowledge",
  },
  {
    id: 4,
    name: "about Us",
    path: "about-us",
  },
];

const Footer = () => {
  const location = useLocation()
  return (
    <footer className="pt-[160px] pb-[98px]">
      <div className="w-[1270px] mx-auto">
        <h3 className="title--xxl mb-[93px]">
          Contact <span className="text-theme-orange">Us</span>
        </h3>
        {/* top  */}
        <div className="flex items-start justify-between">
          {/* footer box  */}
          <div className="footer-box">
            <h4 className="footer-heading">Resources</h4>
            <ul>
              <li>
                <Link className="footer-link" to={"/"}>
                  UltraDriver Store
                </Link>
              </li>
            </ul>
          </div>
          {/* footer box  */}
          <div className="footer-box">
            <h4 className="footer-heading">Plans</h4>
            <Link className="footer-link !text-theme-sky-blue" to={"/"}>
              Subscription Plans
            </Link>
            <ul>
              <li className="mt-6">
                <Link className="footer-contact" to={"/"}>
                  <span className="text-[20px] text-theme-sky-blue">
                    <CiLocationOn />
                  </span>
                  <span>
                    Address: ParkClear, Office 6019, 58 Peregrine Road,
                    Hainault, Essex, IG6 3SZ
                  </span>
                </Link>
              </li>
              <li className="mt-[18px]">
                <a
                  className="footer-contact"
                  href="mailto:info@parkclear.co.uk"
                >
                  <span className="text-[20px] text-theme-sky-blue">
                    <MdOutlineEmail />
                  </span>
                  <span>Email: info@parkclear.co.uk</span>
                </a>
              </li>
              <li className="mt-[18px]">
                <a className="footer-contact" href="tel:4403301334280">
                  <span className="text-[20px] text-theme-sky-blue">
                    <FaPhoneAlt />
                  </span>
                  <span>Phone: +44 (0) 330 133 4280</span>
                </a>
              </li>
            </ul>
          </div>
          {/* footer box  */}
          <div className="footer-box">
            <h4 className="footer-heading">Company</h4>
            <ul>
              <li>
                <Link className="footer-link" to={"/"}>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link className="footer-link" to={"/"}>
                  About Us
                </Link>
              </li>
              <li>
                <Link className="footer-link" to={"/"}>
                  Community
                </Link>
              </li>
            </ul>
          </div>
          {/* footer box  */}
          <div className="footer-box">
            <h4 className="footer-heading">Get in Touch</h4>

            <p className="text-sm w-[200px] text-text-gray">
              Feel free to get in touch with us vai email
            </p>
            <ul>
              <li>
                <Link
                  className="text-base font-bold !text-theme-sky-blue mt-10 inline-block"
                  to={"/"}
                >
                  info@parkclear.co.uk
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* bottom  */}
        <div className="pt-6 border-t border-[rgba(210,208,192,0.21)] flex items-center justify-between mt-[77px]">
          <Link to={"/"}>
            <img className="w-[127px] h-[96px]" src={Logo} alt="Logo" />
          </Link>
          {/* menu  */}
          <ul className="flex items-center gap-[72px]">
            {menuItems?.map((item) => (
              <li key={item?.id}>
                <NavLink
                  to={`${item?.path}`}
                  className={`text-[18px] font-semibold duration-200 ease-in-out hover:text-theme-sky-blue capitalize ${
                    item?.path === location?.pathname
                      ? "text-theme-sky-blue"
                      : "text-menu-color"
                  }`}
                >
                  {item?.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
