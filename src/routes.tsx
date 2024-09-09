import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import { PostDetail } from "./pages/PostDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "blog/:postId",
    element: <PostDetail></PostDetail>,
  },
]);

export default function MainRouter() {
  return <RouterProvider router={router} />;
}
