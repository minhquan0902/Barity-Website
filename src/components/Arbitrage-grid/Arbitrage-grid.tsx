/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import ArbitrageDetail from "../Arbitrage-detail/Arbitrage-detail";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";

interface ArbitrageGridProps {
  arbs: Arbitrage[];
}

const ArbitrageGrid = (props: ArbitrageGridProps) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    ...(typeof window !== "undefined" &&
      window.innerWidth <= 768 && {
        width: "90%",
        top: "10%",
        height: "75%",
        overflowY: "scroll",
        transform: "translate(-50%, 0%)",
      }),

    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const [selectedArbitrage, setSelectedArbitrage] = useState<Arbitrage>(
    {} as Arbitrage
  );
  const arbs = props.arbs;

  React.useEffect(() => {
    console.log(props.arbs);
  }, [props.arbs]);

  const handleOpen = (arb: Arbitrage) => {
    setSelectedArbitrage(arb);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      <section className="blog-pg blog section-padding pt-0">
        <div className="container">
          <div className="posts">
            <div className="row">
              {arbs.map((arb, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="item mb-80 wow fadeInUp" data-wow-delay=".3s">
                    <div className="img">
                      <img src={`/img/Barity-Arbitrage-Page/data.jpg`} alt="" />
                    </div>
                    <div className="cont">
                      <div>
                        <h5>{`${arb?.item1Symbol} / ${arb?.item2Symbol}`}</h5>
                        <div className="btn-more">
                          <a
                            onClick={() => handleOpen(arb)}
                            className="simple-btn"
                          >
                            More Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={open}
        onClose={handleClose}
      >
        <Box
          sx={{
            ...style,
            background: grey[900],
            minWidth: "600px",
          }}
        >
          <ArbitrageDetail arbitrage={selectedArbitrage} />
        </Box>
      </Modal>
    </>
  );
};

export default ArbitrageGrid;
