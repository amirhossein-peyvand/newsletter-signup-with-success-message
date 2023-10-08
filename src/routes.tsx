import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import DesktopSuccess from "./components/DesktopSuccess";
import MobileSuccess from "./components/MobileSuccess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/desktopsuccess", element: <DesktopSuccess /> },
      { path: "/mobilesuccess", element: <MobileSuccess /> },
    ],
  },
]);

export default router;
