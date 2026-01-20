import axios from "axios";

export async function fetchGigs() {
  const url = "https://web3.career/api/jobs";
  const { data } = await axios.get(url);
  return data || [];
}
