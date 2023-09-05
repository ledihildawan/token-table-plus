export type Coin = {
  id: string
  name: string
  symbol: string
  rank: number
  is_new: boolean
  is_active: boolean
  type: string
}

export type Filter = {
  type: string
  name: string
}

export type CoinState = {
  coin: Coin
  value: Coin[]
  filter: Filter
  status: "idle" | "loading" | "failed"
  searchResult: Coin[]
}

export type Data = { nodes: Coin[] }
