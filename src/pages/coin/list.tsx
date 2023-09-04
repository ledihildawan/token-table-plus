import { CompactTable } from "@table-library/react-table-library/compact"
import { Coin, Data } from "./types"
import { Breadcrumb, TableWrapper, CellWrapper } from "../../styles"
import { isText } from "../../utils"
import { useTheme } from "@table-library/react-table-library/theme"
import { useNavigate } from "react-router-dom"
import { usePagination } from "@table-library/react-table-library/pagination"
import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { getCoin, selectCoin, selectStatus } from "./reducer"

import Card from "../../components/card"
import Filter from "../../components/filter"

export default function List() {
  const [data, setData] = useState<Data>({ nodes: [] })

  const navigate = useNavigate()
  const coin = useAppSelector(selectCoin)
  const theme = useTheme({
    BaseCell: `
      padding: .625rem 1.875rem 1.375rem;
    `,
    HeaderRow: `
      border-radius: 4px;
      background: #3783C6;
      color: #fff;
      padding: 1rem;
    `,
    Row: `
      &:nth-of-type(odd) {
        background-color: #fff;
      }

      &:nth-of-type(even) {
        background-color: #F3F7FB;
      }
    `,
  })
  const status = useAppSelector(selectStatus)
  const dispatch = useAppDispatch()
  const columns = [
    {
      label: "#",
      renderCell: (item: Coin) => <CellWrapper>{item.rank}</CellWrapper>,
    },
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
    { label: "Name", renderCell: (item: Coin) => item.name },
    {
      label: "Symbol",
      renderCell: (item: Coin) => item.symbol,
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
    { label: "Action", renderCell: (item: Coin) => "" },
  ]
  const pagination = usePagination(data, { state: { page: 0, size: 100 } })

  useEffect(() => {
    dispatch(getCoin())
  }, [])

  useEffect(() => {
    setData((prevState) => {
      let rank = 0

      return {
        nodes: coin.map((el) => {
          rank += 1

          return {
            ...el,
            rank: el.rank === 0 ? rank : el.rank,
          }
        }),
      }
    })
  }, [coin])

  if (isText("failed", status)) {
    return "Failed to fetch, reload the browser"
  }

  if (!coin.length || isText("loading", status)) {
    return "Loading..."
  }

  return (
    <>
      <Breadcrumb>
        <span>Coin List</span>
      </Breadcrumb>

      <Card title="Coin List">
        <Filter />
        <TableWrapper>
          <CompactTable
            data={data}
            theme={theme}
            columns={columns}
            pagination={pagination}
          />
        </TableWrapper>
      </Card>

      {/* <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Total Pages: {pagination.state.getTotalPages(data.nodes)}</span>

        <span>
          Page:
          {pagination.state.getPages(data.nodes).map((_, index) => (
            <button
              key={index}
              type="button"
              style={{
                fontWeight: pagination.state.page === index ? "bold" : "normal",
              }}
              onClick={() => pagination.fns.onSetPage(index)}
            >
              {index + 1}
            </button>
          ))}
        </span>
      </div> */}
    </>
  )
}
