import { Coin, CoinState, Filter } from "./types"
import { RootState } from "@/store"
import { isText } from "@/utils"
import { fetchCoin } from "./api"
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: CoinState = {
  coin: {
    id: "",
    name: "",
    symbol: "",
    rank: 0,
    is_new: false,
    is_active: false,
    type: "",
  },
  value: [],
  searchResult: [],
  filter: {
    name: "",
    type: "",
  },
  status: "idle",
}

export const getCoin = createAsyncThunk("coin/fetchCoin", async () => {
  const { data } = await fetchCoin()

  return data
})

export const getCoinById = createAsyncThunk(
  "coin/fetchCoinById",
  async (id: string) => {
    const { data } = await fetchCoin({ detail: true, id })

    return data
  },
)

export const coinSlice = createSlice({
  initialState,
  name: "coin",
  reducers: {
    remove(state, action: PayloadAction<string>) {
      state.value = state.value.filter((el) => el.id !== action.payload)
      state.searchResult = state.value.filter((el) => el.id !== action.payload)
    },
    setupFilter: (
      state,
      action: PayloadAction<{ key: any; value: string }>,
    ) => {
      const key = action.payload.key
      const value = action.payload.value

      state.filter[key as keyof Filter] = value

      if (key === "type" && value === "all") {
        state.filter.type = ""
      }
    },
    searchCoin: (state) => {
      const { name, type } = state.filter

      state.searchResult = state.value.filter((el) => {
        let isMatch = isText(name.toLowerCase(), el.name.toLowerCase())

        if (type) {
          isMatch =
            type === el.type &&
            isText(name.toLowerCase(), el.name.toLowerCase())
        }

        if (isMatch) {
          return el
        }
      })
    },
    clearDetail: (state) => {
      state.coin = initialState.coin
    },
  },
  extraReducers: {
    [getCoin.rejected.toString()]: (state) => {
      state.status = "failed"
    },
    [getCoin.fulfilled.toString()]: (state, action) => {
      let rank = 0

      state.value = action.payload.map((el: Coin) => {
        rank += 1

        return {
          ...el,
          rank: el.rank === 0 ? rank : el.rank,
        }
      })

      state.status = "idle"
    },
    [getCoin.pending.toString()]: (state) => {
      state.status = "loading"
    },
    [getCoinById.rejected.toString()]: (state) => {
      state.status = "failed"
    },
    [getCoinById.fulfilled.toString()]: (state, action) => {
      state.coin = action.payload
      state.status = "idle"
    },
    [getCoinById.pending.toString()]: (state) => {
      state.status = "loading"
    },
  },
})

export const { remove, searchCoin, setupFilter, clearDetail } =
  coinSlice.actions

export const selectCoin = (state: RootState) => state.coin.coin
export const selectCoins = (state: RootState) => state.coin.value
export const selectStatus = (state: RootState) => state.coin.status
export const selectSearchResult = (state: RootState) => state.coin.searchResult

export default coinSlice.reducer
