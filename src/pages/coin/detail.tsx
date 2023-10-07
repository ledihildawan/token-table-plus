import { SITE_TITLE, useDocumentTitle } from "@/hooks/use-document-title"
import { Breadcrumb } from "@/styles"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "@hooks"
import { selectCoin, clearCoin, getCoinById, selectStatus } from "./reducer"

import Card from "@components/card"
import DetailRow from "@components/detail-row"

export default function Detail() {
  const { id } = useParams()

  const dispatch = useAppDispatch()
  const coin = useAppSelector(selectCoin)
  const status = useAppSelector(selectStatus)
  const loading = status === "loading"

  useEffect(() => {
    dispatch(getCoinById(id!))

    return () => {
      dispatch(clearCoin())
    }
  }, [])

  useDocumentTitle(coin.name ? `${coin.name} - ${SITE_TITLE}` : null)

  return (
    <>
      <Breadcrumb>Coin Detail</Breadcrumb>

      <Card title="Detail">
        <div>
          <DetailRow title="ID" value={coin.id} loading={loading} />
          <DetailRow title="Name" value={coin.name} loading={loading} />
          <DetailRow title="Symbol" value={coin.symbol} loading={loading} />
          <DetailRow title="Type" value={coin.type} loading={loading} />
          <DetailRow
            title="Active"
            value={coin.is_active ? "True" : "False"}
            loading={loading}
          />
          <DetailRow
            title="Is New ?"
            value={coin.is_new ? "True" : "False"}
            loading={loading}
          />
        </div>
      </Card>
    </>
  )
}
