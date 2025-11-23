import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Market from "../../components/OurMarket/market";
import VideoWithTestimonials from "../../components/Video-with-testimonials/video-with-testimonials";
import SkillsCircle from "../../components/Skills-circle/skills-circle";
import TradingPlatform from "../../components/TradingPlatform/tradingPlatform";
import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import PagesHeader from "../../components/Pages-header";
import AboutIntro from "../../components/About-intro";
import DarkTheme from "../../layouts/Dark";
import Team from "../../components/Team/team";
import MinimalArea from "../../components/Minimal-Area/minimal-area";

const About = () => {
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
      <Navbar nr={navbarRef} lr={logoRef} from="about-dark" />
      <PagesHeader />
      <AboutIntro />
      <br />
      <br />
      <br />
      <br />

      <Market style="3item" />
      <VideoWithTestimonials />
      <SkillsCircle from="aboutPage" />
      <Team />

      <TradingPlatform theme="dark" />
      <CallToAction />
      <Footer />
    </DarkTheme>
  );
};

export default About;
