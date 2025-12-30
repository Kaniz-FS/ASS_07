import React from "react";
import Container from "./Container";

const NavBar = () => {
  return (
    <div className=" bg-base-100 shadow-sm">
      <Container>
        <nav
          className="px-4 md:px-8 py-4 flex flex-col md:flex-row
                     md:items-center md:justify-between gap-3"
        >
          <h1 className="text-xl md:text-2xl font-semibold">
            CS — Ticket System
          </h1>

          <div
            className="flex flex-col md:flex-row items-start md:items-center
                       gap-4 md:gap-6"
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-5 font-medium">
              <a className="hover:text-primary cursor-pointer">Home</a>
              <a className="hover:text-primary cursor-pointer">FAQ</a>
              <a className="hover:text-primary cursor-pointer">Changelog</a>
              <a className="hover:text-primary cursor-pointer">Blog</a>
              <a className="hover:text-primary cursor-pointer">Download</a>
              <a className="hover:text-primary cursor-pointer">Contact</a>
            </div>

            <a
              className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2]
                         text-white mt-2 md:mt-0"
            >
              + New Ticket
            </a>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default NavBar;
