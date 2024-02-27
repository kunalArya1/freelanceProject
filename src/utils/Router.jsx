import { createBrowserRouter } from "react-router-dom";
import Technology from "../Components/Technology";
import Infrastructure from "../Components/Infrastructure";
import App from "../App";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/technology",
    element: <Technology />,
  },
  {
    path: "/infrastructure",
    element: <Infrastructure />,
  },
]);

export default router;
