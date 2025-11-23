import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const ArbClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getArbs = () => {
  return ArbClient.get<ArbResponse>('arbs');
}

