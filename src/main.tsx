import React from "react";
import ReactDOM from "react-dom/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "./layout";
import News from "./pages/News.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();
const helmetContext = {};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404</div>,
    children: [
      {
        index: true,
        element: <Navigate to="/siste-nytt" />,
      },
      {
        path: "/:slug",
        element: <News />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
