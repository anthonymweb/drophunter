import axios from "axios";

export async function fetchTestnets() {
  const url = "https://cryptorank.io/api/v0/testnets";
  const { data } = await axios.get(url);
  return data || [];
}

export async function fetchTestnet(id) {
  const url = `https://cryptorank.io/api/v0/testnets/${id}`;
  const { data } = await axios.get(url);
  return data || {};
}