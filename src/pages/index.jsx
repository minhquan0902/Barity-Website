import React from "react";
import Navbar from "../components/Navbar/navbar";
import IntroWithSlider from "../components/Intro-with-slider/intro-with-slider";
import AboutUs from "../components/About-us/about-us";
import OurMarket from "../components/OurMarket/market";
import VideoWithTestimonials from "../components/Video-with-testimonials/video-with-testimonials";
import SkillsCircle from "../components/Skills-circle/skills-circle";
import TradingPlatform from "../components/TradingPlatform/tradingPlatform";
import Blogs1 from "../components/blogs/Blogs1/blogs1";
import CallToAction from "../components/Call-to-action/call-to-action";
import Footer from "../components/Footer/footer";
import DarkTheme from "../layouts/Dark";
import { Toaster } from "react-hot-toast";

const Index = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current;
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
  }, [fixedSlider, MainContent, navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <AboutUs />
        <OurMarket />
        <VideoWithTestimonials />
        <SkillsCircle theme="dark" />
        <TradingPlatform theme="dark" />

        <CallToAction />
        <Footer />
      </div>
      <Toaster />
    </DarkTheme>
  );
};

export default Index;
