import { createBrowserRouter } from "react-router-dom";

import { ExamplePage, Histogram, Wellbore } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ExamplePage />,
    index: true
  },
  {
    path: "/wellbore",
    element: <Wellbore />
  },
  {
    path: "/histogram",
    element: <Histogram />
  }
]);

export default router;
