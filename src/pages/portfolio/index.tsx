import React, { useEffect, useState } from "react";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import PageHeader from "../../components/Page-header/page-header";
import Footer from "../../components/Footer/footer";
import CallToAction from "../../components/Call-to-action/call-to-action";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { toast } from "react-hot-toast";
import { getArbs } from "../../lib/axios";
import ArbitrageGrid from "../../components/Arbitrage-grid/Arbitrage-grid";
import { ThemeProvider, createTheme } from "@mui/material/";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`portfolio-tabpanel-${index}`}
      aria-labelledby={`portfolio-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const Portfolio = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const [tabValue, setTabValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const [arbs, setArbs] = useState<Arbitrage[]>([]);
  const [hasLoadedArbitrage, setHasLoadedArbitrage] = useState(false);

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

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Fetch arbitrage data only when the arbitrage tab is active (tab index 1)
  useEffect(() => {
    if (tabValue === 1 && !hasLoadedArbitrage) {
      const getArbitrageData = async () => {
        try {
          setLoading(true);
          const response = await getArbs();

          if (response) {
            setArbs(response?.data.data);
            setHasLoadedArbitrage(true);
            setLoading(false);
          }
        } catch (error) {
          toast.error("Error loading arbitrage data");
          console.log(error);
          setLoading(false);
        }
      };

      getArbitrageData();
    }
  }, [tabValue, hasLoadedArbitrage]);

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
          title="Portfolio"
          paragraph="Explore our trading portfolios and arbitrage opportunities!"
        />

        <Box sx={{ width: "100%", mb: 4 }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", display: "flex", justifyContent: "center" }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              aria-label="portfolio tabs"
              textColor="inherit"
              indicatorColor="primary"
              sx={{
                "& .MuiTab-root": {
                  color: "#999",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  textTransform: "none",
                  minWidth: 150,
                },
                "& .Mui-selected": {
                  color: "#fff !important",
                },
              }}
            >
              <Tab label="Futures" />
              <Tab label="Arbitrage" />
            </Tabs>
          </Box>

          <TabPanel value={tabValue} index={0}>
            <section className="blog-pg blog section-padding pt-0">
              <div className="container">
                <div className="posts">
                  <div className="row justify-content-center">
                    {/* Binance Portfolio Card 1 */}
                    <div className="col-lg-5 col-md-6">
                      <div className="item mb-50 wow fadeInUp" data-wow-delay=".3s">
                        <div className="cont" style={{
                          background: "linear-gradient(135deg, #1e1e2e 0%, #2a2a3e 100%)",
                          borderRadius: "12px",
                          padding: "30px",
                          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                          border: "1px solid rgba(255, 255, 255, 0.1)"
                        }}>
                          <div style={{ marginBottom: "20px" }}>
                            <h4 style={{ color: "#fff", marginBottom: "10px" }}>
                              Binance Futures Portfolio 1
                            </h4>
                            <p style={{ color: "#999", fontSize: "0.9rem" }}>
                              Professional copy trading portfolio
                            </p>
                          </div>
                          <div className="btn-more" style={{ marginTop: "20px" }}>
                            <a
                              href="https://www.binance.com/copy-trading/lead-details/4737679173868543744"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="simple-btn"
                              style={{
                                display: "inline-block",
                                padding: "12px 30px",
                                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                color: "#fff",
                                borderRadius: "6px",
                                textDecoration: "none",
                                transition: "transform 0.3s ease",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-2px)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                              }}
                            >
                              View Portfolio
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Binance Portfolio Card 2 */}
                    <div className="col-lg-5 col-md-6">
                      <div className="item mb-50 wow fadeInUp" data-wow-delay=".5s">
                        <div className="cont" style={{
                          background: "linear-gradient(135deg, #1e1e2e 0%, #2a2a3e 100%)",
                          borderRadius: "12px",
                          padding: "30px",
                          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                          border: "1px solid rgba(255, 255, 255, 0.1)"
                        }}>
                          <div style={{ marginBottom: "20px" }}>
                            <h4 style={{ color: "#fff", marginBottom: "10px" }}>
                              Binance Futures Portfolio 2
                            </h4>
                            <p style={{ color: "#999", fontSize: "0.9rem" }}>
                              180-day performance tracking
                            </p>
                          </div>
                          <div className="btn-more" style={{ marginTop: "20px" }}>
                            <a
                              href="https://www.binance.com/en/copy-trading/lead-details/4737680483063456256?timeRange=180D&isPrivate=true"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="simple-btn"
                              style={{
                                display: "inline-block",
                                padding: "12px 30px",
                                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                color: "#fff",
                                borderRadius: "6px",
                                textDecoration: "none",
                                transition: "transform 0.3s ease",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-2px)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                              }}
                            >
                              View Portfolio
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <>
              {loading && (
                <Box sx={{ textAlign: "center", marginBottom: 2 }}>
                  <CircularProgress size={30} />
                  <p style={{ marginTop: "10px", color: "#999" }}>Loading arbitrage opportunities...</p>
                </Box>
              )}
              {!loading && arbs !== null && arbs?.length > 0 && (
                <ArbitrageGrid arbs={arbs} />
              )}
              {!loading && (arbs === null || arbs?.length === 0) && (
                <div className="mb-100" style={{ textAlign: "center" }}>
                  <h3>
                    No Arbitrage Opportunities found at the moment &#128532;.
                    Please wait and try again!
                  </h3>
                </div>
              )}
            </>
          </TabPanel>
        </Box>

        <CallToAction img={""} />
        <Footer hideBGCOLOR={false} />
      </DarkTheme>
    </ThemeProvider>
  );
};

export default Portfolio;
