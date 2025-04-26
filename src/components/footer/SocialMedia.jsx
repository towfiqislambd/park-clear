import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-4">
      <Link to="/" className="social-link">
        <FaFacebookF />
      </Link>
      <Link to="/" className="social-link">
        <FaInstagram />
      </Link>
      <Link to="/" className="social-link">
        <FaXTwitter />
      </Link>
      <Link to="/" className="social-link">
        <FaTiktok />
      </Link>
    </div>
  );
};

export default SocialMedia;
