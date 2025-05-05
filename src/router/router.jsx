import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import DashboardLayout from "../layout/DashboardLayout";
import Overview from "../pages/DashboardPages/Overview";
import Appeal from './../pages/DashboardPages/Appeal';
import TicketManagement from './../pages/DashboardPages/TicketManagement';
import SubscriptionServices from './../pages/DashboardPages/SubscriptionServices';
import Settings from './../pages/DashboardPages/Settings';
import AboutUsPage from "../pages/AboutUsPage";
import TermConditionPage from "../pages/TermConditionPage";
import SubscriptionPlanPage from "../pages/SubscriptionPlanPage";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../pages/AuthPages/LoginPage";
import VerifyOtpPage from "../pages/AuthPages/VerifyOtpPage";
import SignupPage from "../pages/AuthPages/SignupPage";
import TermsPage from "../pages/AuthPages/TermsPage";
import PaymentPage from "../pages/PaymentPage";
import ErrorPage from './../pages/ErrorPages/ErrorPage';
import VirtualAssistant from "@/pages/DashboardPages/VirtualAssistant";
import DriverKnowledge from "@/pages/DriverKnowledge";
import ForgetPassword from "@/pages/AuthPages/ForgetPassword";
import ResetPassword from "@/pages/AuthPages/ResetPassword";

const router = createBrowserRouter([

  // Main Layout
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "about-us", element: <AboutUsPage /> },
      { path: "driver-knowledge", element: <DriverKnowledge /> },
      { path: "terms-condition", element: <TermConditionPage /> },
      { path: "subscription-plan", element: <SubscriptionPlanPage /> },
      { path: "payment", element: <PaymentPage /> },
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
      { path: "virtual-assistant", element: <VirtualAssistant /> },
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
      { path: "signup", element: <SignupPage /> },
      { path: "forgot-password", element: <ForgetPassword /> },
      { path: "verify-otp", element: <VerifyOtpPage /> },
      { path: "reset-password", element: <ResetPassword /> },
      { path: "terms-condition", element: <TermsPage /> },
    ],
  },
]);

export default router;
