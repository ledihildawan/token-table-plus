export type Coin = {
  id: string
  name: string
  symbol: string
  rank: number
  is_new: boolean
  is_active: boolean
  type: string
}

export type Data = { nodes: Coin[] }
