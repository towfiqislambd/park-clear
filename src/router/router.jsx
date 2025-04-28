import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPages/ErrorPage";
import AboutUsPage from "../pages/AboutUsPage";
import TermConditionPage from "../pages/TermConditionPage";
import SubscriptionPlanPage from "../pages/SubscriptionPlanPage";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../pages/AuthPages/LoginPage";
import VerifyOtpPage from "../pages/AuthPages/VerifyOtpPage";
import SignupPage from "../pages/AuthPages/SignupPage";
import TermsPage from "../pages/AuthPages/TermsPage";
import PaymentPage from "../pages/PaymentPage";

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
      {
        path: "payment",
        element: <PaymentPage />,
      },
    ],
  },
  {
    path:"/auth",
    element:<AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"login",
        element:<LoginPage />
      },
      {
        path:"verify-otp",
        element:<VerifyOtpPage />
      },
      {
        path:"signup",
        element:<SignupPage />
      },
      {
        path:"terms-condition",
        element:<TermsPage />
      },
    ]
  }
]);

export default router;
