import { State } from "@table-library/react-table-library/types/common"
import { PaginationLoadingWrapper, TableWrapper } from "../../styles"
import { CompactTable } from "@table-library/react-table-library/compact"
import {
  PaginationFunctions,
  PaginationOptionsSound,
} from "@table-library/react-table-library/pagination"
import { useEffect, useState } from "react"
import { useTheme } from "@table-library/react-table-library/theme"
import { setupLoadingColums, setupLoadingData } from "./utils"

import Skeleton from "react-loading-skeleton"
import EmptyState from "../empty-state"
import ReactPaginate from "react-paginate"
import useMediaQuery from "../../hooks/use-media-query"

type Pagination = {
  state: State
  fns: PaginationFunctions
  options: PaginationOptionsSound
}

function PaginationLoading() {
  return (
    <PaginationLoadingWrapper>
      <Skeleton height={36} width={32} count={11} />
    </PaginationLoadingWrapper>
  )
}

export default function Table({
  numberOfRows,
  loadingLabels,
  gridTemplateColumns,
  data,
  columns,
  loading,
  pagination,
}: {
  numberOfRows?: number
  loadingLabels?: string[]
  gridTemplateColumns?: string
  data: any
  columns: any
  loading: boolean
  pagination: Pagination
}) {
  const [loadingData, setLoadingData] = useState(() => ({
    nodes: setupLoadingData(numberOfRows),
  }))
  const [loadingColumns, setLoadingColumns] = useState(() =>
    setupLoadingColums(loadingLabels),
  )

  const theme = useTheme({
    Table: gridTemplateColumns,
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
  const isMobile = useMediaQuery("(width < 576px)")

  return (
    <TableWrapper>
      <CompactTable
        data={loading ? loadingData : data}
        theme={theme}
        layout={isMobile ? { custom: true, horizontalScroll: true } : null}
        columns={loading ? loadingColumns : columns}
        pagination={pagination}
      />

      {loading ? (
        <PaginationLoading />
      ) : (
        !!data?.nodes?.length && (
          <ReactPaginate
            nextLabel=">"
            breakLabel="..."
            previousLabel="<"
            activeClassName="active"
            containerClassName="pagination"
            pageCount={Math.ceil(data.nodes.length / pagination.state.size)}
            pageRangeDisplayed={5}
            onPageChange={({ selected }) => pagination.fns.onSetPage(selected)}
          />
        )
      )}
    </TableWrapper>
  )
}
