import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "./component/GameDetailPage";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
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
