import { ReactNode } from "react"
import { CardTitle, CardWrapper } from "@/styles"

export default function Card({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>

      {children}
    </CardWrapper>
  )
}
