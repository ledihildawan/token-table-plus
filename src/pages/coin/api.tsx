import axios from "axios"

export async function fetchCoin(
  options?: Partial<{
    id?: string
    detail?: boolean
  }>,
) {
  let url = "https://api.coinpaprika.com/v1/coins/"

  if (options?.detail) {
    url += options.id
  }

  return await axios.get(url)
}
