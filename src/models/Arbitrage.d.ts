interface ArbResponse {
    data: Arbitrage[]
}

interface Arbitrage {
    item1Symbol: string;
    item2Symbol: string;
    expiration: any; // expiration of call or put order
    item1Type: any;
    item2Type: any;
    strike: number;
    futuresPrice: number; // current price (spot price)
    callPricesUsed: MarketDetails;
    putPricesUsed: MarketDetails;
    arbDiffUSD: number;
    diffPerc: number;
}

interface MarketDetails {
    symbol: string;
    expiration: string;
    exchange: string;
    priceSide: string;
    price: number;
    futuresPrice?: number;
    strike: number;
    balance: number;
}
