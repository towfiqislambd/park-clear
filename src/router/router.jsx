import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import DashboardLayout from "../layout/DashboardLayout";
import Overview from "../pages/DashboardPages/Overview"
import Appeal from './../pages/DashboardPages/Appeal';
import TicketManagement from './../pages/DashboardPages/TicketManagement';
import ChatBot from './../pages/DashboardPages/ChatBot';
import SubscriptionServices from './../pages/DashboardPages/SubscriptionServices';
import Settings from './../pages/DashboardPages/Settings';
import ErrorPage from './../pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  // Main Layout
  {
    path: "/",
    element: <Layout />,
    errorElement: "error",
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },

  // Dashboard Layout
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'overview',
        element: <Overview />,
      },
      {
        path: 'appeal',
        element: <Appeal />,
      },
      {
        path: 'ticket-management',
        element: <TicketManagement />,
      },
      {
        path: 'chat-bot',
        element: <ChatBot />,
      },
      {
        path: 'subscription-services',
        element: <SubscriptionServices />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  }
]);

export default router;
