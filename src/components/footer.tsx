import { FooterWrapper } from "@/styles"

export default function Footer() {
  return (
    <FooterWrapper>
      <p>Copyright &copy; {new Date().getFullYear()} Token Table Plus</p>
    </FooterWrapper>
  )
}
