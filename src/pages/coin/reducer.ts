import { RootState } from "@/store"
import { fetchCoin } from "./api"
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Coin } from "./types"

export interface CoinState {
  value: Coin[]
  status: "idle" | "loading" | "failed"
}

const initialState: CoinState = {
  value: [],
  status: "idle",
}

export const getCoin = createAsyncThunk("coin/fetchCoin", async () => {
  const { data } = await fetchCoin()

  return data
})

export const coinSlice = createSlice({
  initialState,
  name: "coin",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCoin.pending, (state) => {
        state.status = "loading"
      })
      .addCase(getCoin.fulfilled, (state, action) => {
        state.value = action.payload
        state.status = "idle"
      })
      .addCase(getCoin.rejected, (state) => {
        state.status = "failed"
      })
  },
})

export const selectCoin = (state: RootState) => state.coin.value
export const selectStatus = (state: RootState) => state.coin.status

export default coinSlice.reducer
