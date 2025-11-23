import React from "react";
import strategiesData from "../../data/strategies.json";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";

import PageHeader from "../../components/Page-header/page-header";
import Footer from "../../components/Footer/footer";
import StrategiesList from "../../components/StrategiesList/strategies-list";

const Strategy = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <DarkTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} />
      <PageHeader
        title="Our strategies"
        paragraph="Here are all the trading strategies happen at Barity."
      />
      <StrategiesList strategies={strategiesData} />
      <Footer />
    </DarkTheme>
  );
};

export default Strategy;
