import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className=" bg-[#000000] ">
      <Container>
        <div className="footer sm:footer-horizontal px-8 py-12 gap-20">
          <div className="text-white w-2xs">
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
            <ul className="text-white/60 text-[15px]">
              <li>@CS — Ticket System</li>
              <li>@CS — Ticket System</li>
              <li>@CS — Ticket System</li>
              <li>support@cst.com</li>
            </ul>
          </div>
        </div>
        <div className="">
          <hr className="border-0 h-px bg-white/30" />

          <div className="py-6  items-center text-center text-white/60 text-sm">
            <p>© 2025 CS — Ticket System. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
