import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "./component/GameDetailPage";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/game:id",
        element: <GameDetailPage />,
      },
    ],
  },
]);

export default router;
