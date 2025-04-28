import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import DashboardLayout from "../layout/DashboardLayout";
import Overview from "../pages/DashboardPages/Overview";
import Appeal from './../pages/DashboardPages/Appeal';
import TicketManagement from './../pages/DashboardPages/TicketManagement';
import ChatBot from './../pages/DashboardPages/ChatBot';
import SubscriptionServices from './../pages/DashboardPages/SubscriptionServices';
import Settings from './../pages/DashboardPages/Settings';
import ErrorPage from './../pages/ErrorPage/ErrorPage';
import AboutUsPage from "../pages/AboutUsPage";
import TermConditionPage from "../pages/TermConditionPage";
import SubscriptionPlanPage from "../pages/SubscriptionPlanPage";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../pages/AuthPages/LoginPage";
import VerifyOtpPage from "../pages/AuthPages/VerifyOtpPage";
import SignupPage from "../pages/AuthPages/SignupPage";
import TermsPage from "../pages/AuthPages/TermsPage";

const router = createBrowserRouter([
  // Main Layout
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "about-us", element: <AboutUsPage /> },
      { path: "terms-condition", element: <TermConditionPage /> },
      { path: "subscription-plan", element: <SubscriptionPlanPage /> },
    ],
  },

  // Dashboard Layout
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "overview", element: <Overview /> },
      { path: "appeal", element: <Appeal /> },
      { path: "ticket-management", element: <TicketManagement /> },
      { path: "chat-bot", element: <ChatBot /> },
      { path: "subscription-services", element: <SubscriptionServices /> },
      { path: "settings", element: <Settings /> },
    ],
  },

  // Auth Layout
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "verify-otp", element: <VerifyOtpPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "terms-condition", element: <TermsPage /> },
    ],
  },
]);

export default router;
