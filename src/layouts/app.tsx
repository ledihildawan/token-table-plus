import { Outlet } from "react-router-dom"
import { AppLayoutWrapper } from "@/styles"

import Header from "@components/header"
import Footer from "@components/footer"

export default function App() {
  return (
    <AppLayoutWrapper>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </AppLayoutWrapper>
  )
}
