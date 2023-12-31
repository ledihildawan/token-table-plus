import { Breadcrumb } from "@/styles"
import { isText } from "@/utils"
import { useList } from "./hooks"

import Card from "@components/card"
import Table from "@components/table"
import Filter from "@components/filter"
import RemoveConfirmation from "@/components/remove-confirmation"

export default function List() {
  const {
    coin,
    data,
    status,
    columns,
    loading,
    pagination,
    searchResult,
    loadingLabels,
    showRemoveConfirmationDeleteModal,
    handleSearch,
    handleDeleteConfirmationModalConfrimed,
  } = useList()

  if (isText("failed", status)) {
    return "Failed to fetch, reload the browser."
  }

  return (
    <>
      <Breadcrumb>Coin List</Breadcrumb>

      <Card title="Coin List">
        <Filter loading={isText("loading", status)} onSearch={handleSearch} />

        <Table
          data={searchResult?.nodes?.length ? searchResult : data}
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

      <RemoveConfirmation
        visible={showRemoveConfirmationDeleteModal}
        message={`Are you sure want to remove ${coin.name} in list?`}
        onConfrimed={handleDeleteConfirmationModalConfrimed}
      />
    </>
  )
}
