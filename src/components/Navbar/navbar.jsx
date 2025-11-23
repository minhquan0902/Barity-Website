/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <div style={{ width: "15%" }}>
            <a>
              {theme ? (
                theme === "themeL" ? (
                  <img ref={lr} src={appData.fullLogo} alt="logo" />
                ) : (
                  <img ref={lr} src={appData.fullLogo} alt="logo" />
                )
              ) : (
                <img ref={lr} src={appData.fullLogo} alt="logo" />
              )}
            </a>
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href={`/about`}>
                <a className="nav-link">About us</a>
              </Link>
            </li>

            {/* Note this code for dropdown */}
            {/* <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Works
              </span>
              <div className="dropdown-menu">
                <Link href={`/showcase/showcase-dark`}>
                  <a className="dropdown-item">Showcase Parallax</a>
                </Link>
                <Link href={`/showcase4/showcase4-dark`}>
                  <a className="dropdown-item">Showcase Carousel</a>
                </Link>
                <Link href={`/showcase3/showcase3-dark`}>
                  <a className="dropdown-item">Showcase Circle</a>
                </Link>
                <Link href={`/works/works-dark`}>
                  <a className="dropdown-item">Portfolio Masonry</a>
                </Link>
                <Link href={`/works2/works2-dark`}>
                  <a className="dropdown-item">Portfolio Filtering</a>
                </Link>
                <Link href={`/works3/works3-dark`}>
                  <a className="dropdown-item">Portfolio Gallery</a>
                </Link>
              </div>
            </li> */}
            <li className="nav-item">
              <Link href={`/visions`}>
                <a className="nav-link">Vision</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={`/strategies`}>
                <a className="nav-link">Strategies</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`/arbitrage-opportunities`}>
                <a className="nav-link">Arbitrage Opportunities</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`/contact`}>
                <a className="nav-link">Become Our Investor</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`/looking-for-investment`}>
                <a className="nav-link">Looking For Investment</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
