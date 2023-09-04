import { GlobalStyle } from "./styles"
import { RouterProvider } from "react-router-dom"
import { Provider as ReduxProvider } from "react-redux"
import { store } from "./store"

import React from "react"
import ReactDOM from "react-dom/client"
import router from "./router"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  </React.StrictMode>,
)
