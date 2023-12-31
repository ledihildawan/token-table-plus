import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { AppLayoutWrapper } from "@/styles"

import Header from "@components/header"
import Footer from "@components/footer"

export default function App() {
  return (
    <>
      <AppLayoutWrapper>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </AppLayoutWrapper>

      <ToastContainer />
    </>
  )
}
