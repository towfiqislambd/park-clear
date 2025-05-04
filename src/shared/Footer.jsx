import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";
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
  const location = useLocation();

  return (
    <footer className="pt-10 lg:pt-20 3xl:pt-[160px] pb-[30px] 3xl:pb-[98px]">
      <div className="max-w-[1270px] mx-auto px-6 3xl:px-0">
        <h3 className="title--xxl mb-6 lg:mb-[50px] 3xl:mb-[93px]" data-aos="fade-up">
          Contact <span className="text-theme-orange">Us</span>
        </h3>
        {/* top  */}
        <div className="flex items-start justify-between flex-wrap gap-8 md:gap-10">
          {/* footer box  */}
          <div className="footer-box" data-aos="fade-up" data-aos-delay="100">
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
          <div className="footer-box" data-aos="fade-up" data-aos-delay="200">
            <h4 className="footer-heading">Plans</h4>
            <Link className="footer-link !text-theme-sky-blue" to={"/subscription-plan"}>
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
          <div className="footer-box" data-aos="fade-up" data-aos-delay="300">
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
          <div className="footer-box" data-aos="fade-up" data-aos-delay="300">
            <h4 className="footer-heading">Get in Touch</h4>

            <p className="text-sm w-[200px] text-text-gray">
              Feel free to get in touch with us vai email
            </p>
            <ul>
              <li>
                <Link className="text-base font-semibold xl:font-bold !text-theme-sky-blue mt-5 xl:mt-10 inline-block">
                  info@parkclear.co.uk
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* bottom  */}
        <div className="pt-4 2xl:pt-6 border-t border-[rgba(210,208,192,0.21)] flex flex-wrap gap-5 items-center justify-between mt-[30px] 2xl:mt-[77px]">
          <Link to={"/"} data-aos="fade-up" data-aos-delay="100">
            <img className="w-[90px] 2xl:w-[100px] 3xl:w-[127px] h-[70px] 2xl:h-[80px] 3xl:h-[96px]" src={Logo} alt="Logo" />
          </Link>
          {/* menu  */}
          <ul
            className="flex items-center flex-wrap gap-3 md:gap-4 lg:gap-10 2xl:gap-[72px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {menuItems?.map((item) => (
              <li key={item?.id}>
                <NavLink
                  to={`${item?.path}`}
                  className={`text-sm md:text-base 2xl:text-[18px] font-medium lg:font-semibold duration-200 ease-in-out hover:text-theme-sky-blue capitalize ${item?.path === location?.pathname
                    ? "text-theme-sky-blue"
                    : "text-menu-color"
                    }`}
                >
                  {item?.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div data-aos="fade-up" data-aos-delay="100">
            <SocialMedia />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
