import React from "react";
import Container from "./Container";

const NavBar = () => {
  return (
    <div className=" bg-base-100 shadow-sm">
      <Container>
        <nav className="px-8 py-4 flex justify-between item-center">
          <h1 className="text-2xl font-semibold">CS — Ticket System</h1>

          <div className="flex items-center gap-6">
            <div className="flex gap-5 font-medium">
              <a>Home</a>
              <a>FAQ</a>
              <a>Changelog</a>
              <a>Blog</a>
              <a>Download</a>
              <a>Contact</a>
            </div>
            <a className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
              + New Ticket
            </a>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default NavBar;
