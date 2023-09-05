import { Breadcrumb } from "../../../styles"
import { isText } from "../../../utils"
import { useList } from "./hooks"

import Card from "../../../components/card"
import Table from "../../../components/table"
import Filter from "../../../components/filter"

export default function List() {
  const {
    data,
    status,
    columns,
    loading,
    pagination,
    filteredData,
    loadingLabels,
    handleSearch,
  } = useList()

  if (isText("failed", status)) {
    return "Failed to fetch, reload the browser."
  }

  return (
    <>
      <Breadcrumb>Coin List</Breadcrumb>

      <Card title="Coin List">
        <Filter loading={status === "loading"} onSearch={handleSearch} />

        <Table
          data={filteredData?.nodes?.length ? filteredData : data}
          loading={loading}
          columns={columns}
          pagination={pagination}
          numberOfRows={loadingLabels.length}
          loadingLabels={loadingLabels}
          gridTemplateColumns={`
            --data-table-library_grid-template-columns: minmax(250px, 1fr) minmax(250px, 1fr) minmax(250px, 1fr) minmax(250px, 1fr) minmax(250px, 1fr) minmax(250px, 1fr) minmax(250px, 1fr);
          `}
        />
      </Card>
    </>
  )
}
