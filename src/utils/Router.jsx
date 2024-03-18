import { createBrowserRouter } from "react-router-dom";
import Technology from "../Components/Technology";
import Infrastructure from "../Components/Infrastructure";
import App from "../App";
import Contact from "../Components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/technology",
    element: <Technology />,
  },
  {
    path: "/infrastructure",
    element: <Infrastructure />,
  },
  {
    path: "/infra",
    element: <Infrastructure />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
