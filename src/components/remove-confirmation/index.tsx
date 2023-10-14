import { BtnNo, BtnYes, Footer, Message, Title, Header } from "./styles"

import Modal from "react-modal"
import Warning from "@/assets/icons/warning"
import useMediaQuery from "@/hooks/use-media-query"

export default function RemoveConfirmation({
  message,
  visible,
  onConfrimed,
}: {
  message?: string
  visible: boolean
  onConfrimed: (visible: boolean, label: string) => void
}) {
  const isMobile = useMediaQuery("(width < 576px)")

  function hideModal(visible: boolean, label: string) {
    onConfrimed(visible, label)
  }

  return (
    <Modal
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          maxWidth: 360,
        },
      }}
      isOpen={visible}
      ariaHideApp={false}
      contentLabel="Delete Confirmation Modal"
    >
      <Header>
        <Warning width={24} height={24} />
        <Title>Remove Coin</Title>
      </Header>

      <Message>{message ?? "Are you sure want to remove this?"}</Message>

      <Footer>
        <BtnNo type="button" onClick={() => hideModal(false, "No")}>
          No
        </BtnNo>
        <BtnYes type="button" onClick={() => hideModal(false, "Yes")}>
          Yes
        </BtnYes>
      </Footer>
    </Modal>
  )
}
