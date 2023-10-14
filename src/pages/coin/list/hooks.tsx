import { SITE_TITLE, useDocumentTitle } from "@/hooks/use-document-title"
import { Coin } from "../types"
import { CellWrapper, BtnRemove } from "@/styles"
import { useNavigate } from "react-router-dom"
import { usePagination } from "@table-library/react-table-library/pagination"
import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "@hooks"
import {
  select,
  remove,
  getCoin,
  searchCoin,
  selectCoins,
  selectStatus,
  selectSearchResult,
  selectCoin,
  clearCoin,
} from "../reducer"
import { toast } from "react-toastify"

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
  const [
    showRemoveConfirmationDeleteModal,
    setShowRemoveConfirmationDeleteModal,
  ] = useState<boolean>(false)

  const coin = useAppSelector(selectCoin)
  const coins = useAppSelector(selectCoins)
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
        <BtnRemove type="button" onClick={() => handleBtnRemoveOnClicked(item)}>
          Remove
        </BtnRemove>
      ),
    },
  ]
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const pagination = usePagination(
    { nodes: coins },
    { state: { page: 0, size: 100 } },
  )
  const searchResult = useAppSelector(selectSearchResult)

  function handleSearch() {
    dispatch(searchCoin())

    pagination.fns.onSetPage(0)
  }

  function handleBtnRemoveOnClicked(item: Coin) {
    dispatch(select(item))
    setShowRemoveConfirmationDeleteModal(true)
  }

  function handleDeleteConfirmationModalConfrimed(
    visible: boolean,
    label: string,
  ) {
    if (label === "Yes") {
      dispatch(remove(coin.id))
      dispatch(clearCoin())

      toast.success(
        `${coin.symbol} remove successfully from the list. Refresh the browser if you want to revert all deleted item in list.`,
      )
    }

    setShowRemoveConfirmationDeleteModal(visible)
  }

  useEffect(() => {
    if (!coins.length) {
      dispatch(getCoin())
    }
  }, [])

  useDocumentTitle(`Coin List - ${SITE_TITLE}`)

  return {
    coin,
    status,
    columns,
    pagination,
    loadingLabels,
    showRemoveConfirmationDeleteModal,
    handleSearch,
    setShowRemoveConfirmationDeleteModal,
    handleDeleteConfirmationModalConfrimed,
    data: { nodes: coins },
    loading: status === "loading",
    searchResult: { nodes: searchResult },
  }
}
