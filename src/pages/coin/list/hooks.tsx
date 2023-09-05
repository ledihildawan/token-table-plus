import { Coin, Data } from "../types"
import { CellWrapper, BtnRemove } from "../../../styles"
import { useNavigate } from "react-router-dom"
import { usePagination } from "@table-library/react-table-library/pagination"
import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../hooks"
import {
  getCoin,
  remove,
  searchCoin,
  selectCoins,
  selectStatus,
  selectSearchResult,
} from "../reducer"

const loadingLabels = [
  "ID",
  "Name",
  "Symbol",
  "Rank",
  "Type",
  "Active",
  "Action",
]

export function useList() {
  const [data, setData] = useState<Data>({ nodes: [] })
  const [filteredData, setFilteredData] = useState<null | Data>(null)

  const coin = useAppSelector(selectCoins)
  const status = useAppSelector(selectStatus)
  const columns = [
    {
      label: "ID",
      renderCell: (item: Coin) => (
        <CellWrapper
          $link={true}
          $color="#0062A6"
          onClick={() => navigate(`/coin/${item.id}`)}
        >
          {item.id}
        </CellWrapper>
      ),
    },
    {
      label: "Name",
      renderCell: (item: Coin) => item.name,
    },
    {
      label: "Symbol",
      renderCell: (item: Coin) => item.symbol,
    },
    {
      label: "Rank",
      renderCell: (item: Coin) => <CellWrapper>{item.rank}</CellWrapper>,
    },
    {
      label: "Type",
      renderCell: (item: Coin) =>
        `${item.type.at(0)?.toUpperCase()}${item.type.substring(1)}`,
    },
    {
      label: "Active",
      renderCell: (item: Coin) => (item.is_active ? "True" : "False"),
    },
    {
      label: "Action",
      renderCell: (item: Coin) => (
        <BtnRemove
          type="button"
          onClick={() => {
            const deleteConfirm = confirm(
              `Are you sure want to remove ${item.symbol} in list?`,
            )

            if (deleteConfirm) {
              dispatch(remove(item.id))

              alert(
                `${item.symbol} deleted successfully. Refresh the browser if you want to revert all deleted item in list.`,
              )
            }
          }}
        >
          Remove
        </BtnRemove>
      ),
    },
  ]
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const pagination = usePagination(data, { state: { page: 0, size: 100 } })
  const searchResult = useAppSelector(selectSearchResult)

  function handleSearch() {
    dispatch(searchCoin())

    pagination.fns.onSetPage(0)
  }

  useEffect(() => {
    dispatch(getCoin())
  }, [])

  useEffect(() => {
    setData({ nodes: coin })
  }, [coin])

  useEffect(() => {
    setFilteredData({ nodes: searchResult })
  }, [searchResult])

  return {
    data,
    status,
    columns,
    pagination,
    filteredData,
    loadingLabels,
    handleSearch,
    loading: status === "loading",
  }
}
