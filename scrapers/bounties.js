import axios from "axios";

export async function fetchBounties() {
  const url = "https://gitcoin.co/api/v0.1/bounties";
  const { data } = await axios.get(url);
  return data.items || [];
}
