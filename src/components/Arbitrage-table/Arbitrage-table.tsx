import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

interface ArbitrageTableProps {
  arbs: Arbitrage[];
}

interface TableRowData {
  side: string;
  exchange: string;
  originalSymbol: string;
  price: number;
  strike: number;
  futurePrice: number;
  balance: number;
  arbDiffUSD: number;
  arbPercentage: number;
}

const ArbitrageTable = (props: ArbitrageTableProps) => {
  const { arbs } = props;

  // Transform arbitrage data into table rows
  // Each arbitrage creates 2 rows: one for call and one for put
  const tableRows: TableRowData[] = [];

  arbs.forEach((arb) => {
    // Add call row
    if (arb.callPricesUsed) {
      tableRows.push({
        side: arb.callPricesUsed.priceSide || "CALL",
        exchange: arb.callPricesUsed.exchange,
        originalSymbol: arb.callPricesUsed.symbol,
        price: arb.callPricesUsed.price,
        strike: arb.callPricesUsed.strike,
        futurePrice: arb.futuresPrice,
        balance: arb.callPricesUsed.balance,
        arbDiffUSD: arb.arbDiffUSD,
        arbPercentage: arb.diffPerc,
      });
    }

    // Add put row
    if (arb.putPricesUsed) {
      tableRows.push({
        side: arb.putPricesUsed.priceSide || "PUT",
        exchange: arb.putPricesUsed.exchange,
        originalSymbol: arb.putPricesUsed.symbol,
        price: arb.putPricesUsed.price,
        strike: arb.putPricesUsed.strike,
        futurePrice: arb.futuresPrice,
        balance: arb.putPricesUsed.balance,
        arbDiffUSD: arb.arbDiffUSD,
        arbPercentage: arb.diffPerc,
      });
    }
  });

  return (
    <div style={{ padding: "0 20px", marginBottom: "50px" }}>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "#1e1e2e",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "12px",
          overflowX: "auto",
        }}
      >
        <Table sx={{ minWidth: 1000 }}>
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#2a2a3e",
              }}
            >
              <TableCell
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  borderBottom: "2px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                Side
              </TableCell>
              <TableCell
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  borderBottom: "2px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                Exchange
              </TableCell>
              <TableCell
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  borderBottom: "2px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                Original Symbol
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  borderBottom: "2px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                Price
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  borderBottom: "2px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                Strike
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  borderBottom: "2px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                Future Price
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  borderBottom: "2px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                Balance
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  borderBottom: "2px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                Arbitrage Diff in USD
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  borderBottom: "2px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                Arbitrage Percentage
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRows.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:nth-of-type(odd)": {
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                  },
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                  },
                  transition: "background-color 0.2s ease",
                }}
              >
                <TableCell
                  sx={{
                    color: "#fff",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <span
                    style={{
                      padding: "4px 12px",
                      borderRadius: "4px",
                      backgroundColor:
                        row.side.toUpperCase().includes("CALL") ||
                        row.side.toUpperCase() === "BUY"
                          ? "rgba(76, 175, 80, 0.2)"
                          : "rgba(244, 67, 54, 0.2)",
                      color:
                        row.side.toUpperCase().includes("CALL") ||
                        row.side.toUpperCase() === "BUY"
                          ? "#4caf50"
                          : "#f44336",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                    }}
                  >
                    {row.side.toUpperCase()}
                  </span>
                </TableCell>
                <TableCell
                  sx={{
                    color: "#ccc",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                  }}
                >
                  {row.exchange}
                </TableCell>
                <TableCell
                  sx={{
                    color: "#ccc",
                    fontFamily: "monospace",
                    fontSize: "0.9rem",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                  }}
                >
                  {row.originalSymbol}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    color: "#ccc",
                    fontFamily: "monospace",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                  }}
                >
                  ${row.price.toFixed(2)}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    color: "#ccc",
                    fontFamily: "monospace",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                  }}
                >
                  ${row.strike.toFixed(2)}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    color: "#ccc",
                    fontFamily: "monospace",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                  }}
                >
                  ${row.futurePrice.toFixed(2)}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    color: "#ccc",
                    fontFamily: "monospace",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                  }}
                >
                  {row.balance.toFixed(4)}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    color: row.arbDiffUSD >= 0 ? "#4caf50" : "#f44336",
                    fontFamily: "monospace",
                    fontWeight: 600,
                    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                  }}
                >
                  ${row.arbDiffUSD.toFixed(2)}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    color: row.arbPercentage >= 0 ? "#4caf50" : "#f44336",
                    fontFamily: "monospace",
                    fontWeight: 600,
                    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                  }}
                >
                  {row.arbPercentage.toFixed(2)}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ArbitrageTable;
