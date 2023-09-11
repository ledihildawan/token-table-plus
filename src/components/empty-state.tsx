import { EmptyStateWrapper } from "@/styles"

import NoData from "@/assets/illustrations/no-data"

export default function EmptyState() {
  return (
    <EmptyStateWrapper>
      <NoData />
      <p>No Data</p>
    </EmptyStateWrapper>
  )
}
