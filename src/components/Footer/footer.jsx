/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>support@barity.capital</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="item">
              <div style={{ width: "50%" }}>
                <img height={"50%"} src={appData.fullLogo} alt="" />
              </div>
              <div className="social">
                <a href="https://www.linkedin.com/company/barity/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.crunchbase.com/organization/barity">
                  <img
                    style={{ width: "20px" }}
                    src="/img/crunchbase-logo/crunchbase-seeklogo.com.svg"
                    alt=""
                  />
                </a>
              </div>
              <div className="copy-right">
                <p>© 2023, Barity Capital. All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
