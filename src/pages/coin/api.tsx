import axios from "axios"

export async function fetchCoin() {
  return await axios.get("https://api.coinpaprika.com/v1/coins")
}
