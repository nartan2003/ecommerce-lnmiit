import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";


import { FaYoutube, FaInstagram, FaTwitter, FaDribbble } from 'react-icons/fa';

const socialLinks = [
  { label: "https://youtu.be/FaCK24aPfYk?si=MveUyhKHoML3nTPl", icon: FaYoutube },
  { label: "Instagram", icon: FaInstagram },
  { label: "Twitter", icon: FaTwitter },
  { label: "Dribbble", icon: FaDribbble },
];

const links = [
  {
    header: "Company",
    items: [
      { label: "About us", key: "item-1-1" },
      { label: "Blog", key: "item-1-2" },
      { label: "Contact us", key: "item-1-3" },
      { label: "Pricing", key: "item-1-4" },
      { label: "Testimonials", key: "item-1-5" },
    ],
  },
  {
    header: "Support",
    items: [
      { label: "Help center", key: "item-2-1" },
      { label: "Terms of service", key: "item-2-2" },
      { label: "Legal", key: "item-2-3" },
      { label: "Privacy policy", key: "item-2-4" },
      { label: "Status", key: "item-2-5" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="footer-container bg-green-800 text-white">
      <div className="footer-content max-w-7xl mx-auto py-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8">
        <div className="footer-left">
          <div className="footer-img flex items-center">
            <img src={"https://tse4.mm.bing.net/th?id=OIP.vKuYd0Zmzi6kxz42W48SBwHaDa&pid=Api&P=0&h=180"} alt="Company Logo" className="w-16 h-auto" />
            <span className="text-3xl font-bold pl-2">LNMIIT JAIPUR</span>
          </div>
          <div className="infos text-gray-400">
            <span>Copyright © 2024 Nexcent Ltd.</span>
            <span>All rights reserved</span>
          </div>
          <div className="footer-icons flex items-center space-x-3">
            {socialLinks.map((socialLink, index) => {
              const Icon = socialLink.icon;
              return (
                <Icon key={`social-${index}`} className="w-10 h-10 p-2 rounded-full bg-green-700 hover:bg-white hover:text-green-700 cursor-pointer" />
              );
            })}
          </div>
        </div>
        <div className="footer-links grid gap-4 md:gap-8">
          {links.map((col, index) => (
            <div key={`col-${index}`}>
              <h3 className="text-lg font-semibold mb-2 text-white">{col.header}</h3>
              <ul className="text-gray-400">
                {col.items.map((link, index) => (
                  <li key={`link-${col.header}-${index}`} className="cursor-pointer">
                    {link.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-form flex flex-col">
          <label className="text-lg font-semibold text-white">Contact Us for More Information</label>
          
        </div>
      </div>
    </div>
  );

  
 
};

export default Footer;
