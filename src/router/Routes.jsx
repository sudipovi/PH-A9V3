import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Rootlayout from "../root/Rootlayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
  },
]);

export default router;
