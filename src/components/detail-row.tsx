import { DetailRowWrapper } from "../styles"

import Skeleton from "react-loading-skeleton"

export default function DetailRow({
  title,
  value,
  loading,
}: {
  title: string
  value: any
  loading: boolean
}) {
  return (
    <DetailRowWrapper>
      <p>{title}</p>
      <p>{loading ? <Skeleton /> : value}</p>
    </DetailRowWrapper>
  )
}
