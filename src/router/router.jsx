import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPages/ErrorPage";
import AboutUsPage from "../pages/AboutUsPage";
import TermConditionPage from "../pages/TermConditionPage";
import SubscriptionPlanPage from "../pages/SubscriptionPlanPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about-us",
        element: <AboutUsPage />,
      },
      {
        path: "terms-condition",
        element: <TermConditionPage />,
      },
      {
        path: "subscription-plan",
        element: <SubscriptionPlanPage />,
      },
    ],
  },
]);

export default router;
