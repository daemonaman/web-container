import React, { useEffect } from "react";
import "./Footer.css";
import { FaInstagram, FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoLogoYoutube } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import log from '../../Assets/sndlogokidz.png'
import app from '../../Assets/app-store-google-play-logo 1.png'
import info from '../../Assets/Group 2988.svg'
import logo from '../../Assets/kidztrymainlogo.png';
import kidtryz from "../../Assets/kidztrymainlogo.png";
import { Grid, Select, MenuItem } from '@mui/material';
import { useState } from 'react';
import kidimg from "../../Assets/sndlogokidz.png"
import playstore from "../../Assets/googlestore.png"
import appstore from "../../Assets/appstore.png"
const Footer = () => {
  const [language, setLanguage] = useState("en");
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <>
      <div id="info">
        <img src={info} alt="" srcset="" />
      </div>
      <footer>
        <div className="main-footer">
          <div className="footer-section">
            <div className="image_language">
              <div className="logo-section">
                <img src={logo} alt="" srcset="" width={100} height={100} id="big"/>
              </div>
            </div>
            <div className="social-links">
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaSquareFacebook />
              </a>
              <a href="">
                <IoLogoYoutube />
              </a>
              <a href="https://www.linkedin.com/company/hypersage/mycompany/">
                <FaLinkedin />
              </a>
              <a href="">
                <FaXTwitter />
              </a>
              <a href="">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Get to Know Us</h3>
            <ul>
              <Link to="/aboutus" className="seller-links"  onClick={scrollToTop}>
                <li>About Us</li>
              </Link>
              <Link to="/careers" className="seller-links" onClick={scrollToTop}>
                <li>Careers</li>
              </Link>
              <Link to="/contactus" className="seller-links" onClick={scrollToTop}>
                <li>Contact Us</li>
              </Link>
              <Link to="/blogs" className="seller-links" onClick={scrollToTop}>
                <li>Blogs</li>
              </Link>
              <Link
                to="/becomeseller"
                className="seller-links"
                onClick={scrollToTop}
              >
                <li>Become a Seller</li>
              </Link>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Useful Links</h3>
            <ul>
              <Link
                to="/privacy-policy"
                className="usefull-link"
                onClick={scrollToTop}
              >
                <li>Privacy Policy</li>
              </Link>
              <Link
                to="/cookies-policy"
                onClick={scrollToTop}
                className="usefull-link"
              >
                <li>Cookies Policy</li>
              </Link>
              <Link
                to="/terms-conditions"
                onClick={scrollToTop}
                className="usefull-link"
              >
                <li>Terms and Conditions</li>
              </Link>
              <Link
                to="/return-policy"
                onClick={scrollToTop}
                className="usefull-link"
              >
                <li>Returns Policy</li>
              </Link>
              <Link
                to="/shipping-policy"
                onClick={scrollToTop}
                className="usefull-link"
              >
                <li>Shipping Policy</li>
              </Link>
            </ul>
          </div>
          <div className="footer-section">
            <div className="stores">
              <div className="kidimg">
                <img src={kidimg} alt="" srcset="" />
              </div>
            <div className="app-logos">
              <img src={playstore} alt="" />
              <img src={appstore} alt="" />
            </div>
            </div>
            <ul>
              <Link to="" className="usefull-link">
                <li>KidzTryz App Download</li>
              </Link>

              <Link to="/help" className="usefull-link">
                <li>Help</li>
              </Link>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyright-section">
        <p>@2024 KidzTryz All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
