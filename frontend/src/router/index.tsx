import React from "react";
import { createBrowserRouter } from "react-router-dom";
import CmLayout from "@/pages/Layout";
import Dashboard from "@/pages/Dashboard";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CmLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
