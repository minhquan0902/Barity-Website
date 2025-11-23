/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Box,
  TableContainer,
  Paper,
  TableRow,
  TableCell,
  TableHead,
  TableCellProps,
} from "@mui/material/";
import Table from "@mui/material/Table";

interface ArbitrageProps {
  arbitrage: Arbitrage;
}

const ArbitrageDetail = (props: ArbitrageProps) => {
  const arbitrage = props.arbitrage;

  return (
    <Box style={{}}>
      <Box
        className="text"
        fontSize={30}
        justifySelf={"center"}
        textAlign={"center"}
        pb={5}
      >
        Opportunity details
      </Box>

      <Box>
        <TableContainer component={Paper} style={{ fontFamily: "inherit" }}>
          <Table
            sx={{ minWidth: 700, bgcolor: "" }}
            aria-label="customized table"
          >
            <TableRow style={{ backgroundColor: "black" }}>
              <BarityTableCell isLeftCell={true}>Side</BarityTableCell>
              <BarityTableCell align="left" isTopCell={true}>
                Call
              </BarityTableCell>
              <BarityTableCell align="left" isTopCell={true}>
                Put
              </BarityTableCell>
            </TableRow>

            <TableRow>
              <BarityTableCell isLeftCell={true}>Exchange</BarityTableCell>
              <BarityTableCell align="left">
                {arbitrage.callPricesUsed.exchange}
              </BarityTableCell>
              <BarityTableCell align="left">
                {arbitrage.putPricesUsed.exchange}
              </BarityTableCell>
            </TableRow>

            <TableRow>
              <BarityTableCell isLeftCell={true}>
                Original Symbol
              </BarityTableCell>
              <BarityTableCell align="left">
                {arbitrage.callPricesUsed.symbol}
              </BarityTableCell>
              <BarityTableCell align="left">
                {arbitrage.putPricesUsed.symbol}
              </BarityTableCell>
            </TableRow>

            <TableRow>
              <BarityTableCell isLeftCell={true}>Price</BarityTableCell>
              <BarityTableCell align="left">
                {arbitrage.callPricesUsed.price}
              </BarityTableCell>
              <BarityTableCell align="left">
                {arbitrage.putPricesUsed.price}
              </BarityTableCell>
            </TableRow>

            <TableRow>
              <BarityTableCell isLeftCell={true}>Strike</BarityTableCell>
              <BarityTableCell align="left">
                {arbitrage.callPricesUsed.strike}
              </BarityTableCell>
              <BarityTableCell align="left">
                {arbitrage.putPricesUsed.strike}
              </BarityTableCell>
            </TableRow>

            <TableRow>
              <BarityTableCell isLeftCell={true}>Future price</BarityTableCell>
              <BarityTableCell align="left">
                {arbitrage.callPricesUsed.futuresPrice}
              </BarityTableCell>
              <BarityTableCell align="left">
                {arbitrage.putPricesUsed.futuresPrice}
              </BarityTableCell>
            </TableRow>

            <TableRow>
              <BarityTableCell isLeftCell={true}>Balance</BarityTableCell>
              <BarityTableCell align="left">
                {arbitrage.callPricesUsed.balance}
              </BarityTableCell>
              <BarityTableCell align="left">
                {arbitrage.putPricesUsed.balance}
              </BarityTableCell>
            </TableRow>

            <TableRow>
              <BarityTableCell isLeftCell={true}>
                Arbitrage Diff in USD
              </BarityTableCell>
              <BarityTableCell
                align="center"
                colSpan={2}
                style={{ fontSize: 20 }}
              >
                {arbitrage.arbDiffUSD}
              </BarityTableCell>
            </TableRow>

            <TableRow>
              <BarityTableCell isLeftCell={true}>
                Arbitrage Percentage
              </BarityTableCell>
              <BarityTableCell
                align="center"
                colSpan={2}
                style={{ fontSize: 20 }}
              >
                {arbitrage.diffPerc}
              </BarityTableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

interface BarityCellProps extends TableCellProps {
  isLeftCell?: boolean;
  isTopCell?: boolean;
}

const BarityTableCell: React.FC<BarityCellProps> = (props) => (
  <TableCell
    style={{
      fontFamily: "inherit",
      fontSize: props.isLeftCell || props.isTopCell ? 20 : 15,
    }}
    {...props}
  >
    {props.children}
  </TableCell>
);

export default ArbitrageDetail;
