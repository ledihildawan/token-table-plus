import { createBrowserRouter } from "react-router-dom"

import { default as coinRouter } from "@pages/coin/router"
import { default as homeRouter } from "@pages/home/router"

import AppLayout from "@layouts/app"

export default createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [homeRouter, coinRouter],
  },
])
