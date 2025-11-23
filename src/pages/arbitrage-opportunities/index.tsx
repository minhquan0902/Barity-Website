import React, { useEffect, useState } from "react";
import blog3Data from "../../data/blog3.json";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import PageHeader from "../../components/Page-header/page-header";
import Footer from "../../components/Footer/footer";
import CallToAction from "../../components/Call-to-action/call-to-action";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";

import Box from "@mui/material/Box";
import { toast } from "react-hot-toast";
import { getArbs } from "../../lib/axios";
import ArbitrageGrid from "../../components/Arbitrage-grid/Arbitrage-grid";
import { ThemeProvider, createTheme } from "@mui/material/";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const ArbitrageOpportunities = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      (navbar as any).classList.add("nav-scroll");
    } else {
      (navbar as any).classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        (navbar as any).classList.add("nav-scroll");
      } else {
        (navbar as any).classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  const [loading, setLoading] = useState(false);
  const [arbs, setArbs] = useState<Arbitrage[]>([]);
  useEffect(() => {
    const getArbitrageData = async () => {
      try {
        setLoading(true);
        const response = await getArbs();

        if (response) {
          setArbs(response?.data.data);
          setLoading(false);
        }
      } catch (error) {
        toast.error("error");
        console.log(error);
        setLoading(false);
      }
    };

    getArbitrageData();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <DarkTheme useSkin={undefined} mobileappstyle={undefined}>
        <div className="circle-bg">
          <div className="circle-color fixed">
            <div className="gradient-circle"></div>
            <div className="gradient-circle two"></div>
          </div>
        </div>
        <Navbar nr={navbarRef} lr={logoRef} theme={undefined} />
        <PageHeader
          className="mb-50"
          title="Arbitrage Opportunities"
          paragraph="Discover some fantastic opportunities brought to you by our algorithm!"
        />
        {loading && arbs === null ? (
          <Box sx={{ textAlign: "center", marginBottom: 30 }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            {arbs !== null && arbs?.length > 0 ? (
              <ArbitrageGrid arbs={arbs} />
            ) : (
              <div className="mb-100" style={{ textAlign: "center" }}>
                <h3>
                  {" "}
                  No Arbitrage Opportunities found at the moment &#128532;.
                  Please wait and try again!{" "}
                </h3>
              </div>
            )}
          </>
        )}

        <CallToAction img={""} />
        <Footer hideBGCOLOR={false} />
      </DarkTheme>
    </ThemeProvider>
  );
};

export default ArbitrageOpportunities;
