import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import React from "react";
import AmericanIndicesView from "./page/AmericanIndicesView/AmericanIndicesView";
import EurUsdView from "./page/EurUsdView/EurUsdView";
import "./assets/style.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/eurusd'} />
  },
  {
    path: '/eurusd',
    element: <EurUsdView />
  },
  {
    path: '/americanIndices',
    element: <AmericanIndicesView />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
