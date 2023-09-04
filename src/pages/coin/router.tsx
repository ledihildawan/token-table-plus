import List from "./list"
import Detail from "./detail"

export default {
  path: "/coin",
  children: [
    {
      index: true,
      element: <List />,
    },
    {
      path: ":id",
      element: <Detail />,
    },
  ],
}
