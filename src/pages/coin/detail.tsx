import { Breadcrumb, DetailRow } from "../../styles"
import Card from "../../components/card"

export default function Detail() {
  return (
    <>
      <Breadcrumb>Coin Detail</Breadcrumb>

      <Card title="Detail">
        <div>
          <DetailRow>
            <p>ID</p>
            <p>btc-bitcoin</p>
          </DetailRow>
          <DetailRow>
            <p>Name</p>
            <p>Bitcoin</p>
          </DetailRow>
          <DetailRow>
            <p>Symbol</p>
            <p>BTC</p>
          </DetailRow>
          <DetailRow>
            <p>Type</p>
            <p>Coin</p>
          </DetailRow>
          <DetailRow>
            <p>Active</p>
            <p>True</p>
          </DetailRow>
          <DetailRow>
            <p>Is New?</p>
            <p>False</p>
          </DetailRow>
        </div>
      </Card>
    </>
  )
}
