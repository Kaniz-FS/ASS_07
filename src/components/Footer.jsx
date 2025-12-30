import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-[#000000]">
      <Container>
        <div className="footer sm:footer-horizontal px-4 sm:px-8 py-12 gap-10 sm:gap-20">
          
          <div className="text-white max-w-xs">
            <h1 className="text-2xl font-bold">CS-Ticket System</h1>
            <p className="text-white/60 text-[15px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="text-white">
            <h1 className="text-2xl font-bold">Company</h1>
            <ul className="text-white/60 text-[15px]">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Saled</li>
            </ul>
          </div>

          <div className="text-white">
            <h1 className="text-2xl font-bold">Services</h1>
            <ul className="text-white/60 text-[15px]">
              <li>Products & Services</li>
              <li>Customer Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>

          <div className="text-white">
            <h1 className="text-2xl font-bold">Information</h1>
            <ul className="text-white/60 text-[15px]">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>

          <div className="text-white">
            <h1 className="text-2xl font-bold">Social Links</h1>

            <ul className="text-white/60 text-[15px] space-y-2 mt-3">
              <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                <i className="fa-brands fa-facebook"></i>
                @CS — Ticket System
              </li>

              <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                <i className="fa-brands fa-twitter"></i>
                @CS — Ticket System
              </li>

              <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                <i className="fa-brands fa-instagram"></i>
                @CS — Ticket System
              </li>

              <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                <i className="fa-solid fa-envelope"></i>
                support@cst.com
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-0 h-px bg-white/30" />

        <div className="py-6 text-center text-white/60 text-sm">
          © 2025 CS — Ticket System. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
