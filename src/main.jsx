import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./Component/App/App";
import Login from "./Layout/Login";
import './index.css'
import FaceBook from "./Component/Login/FaceBook/FaceBook";
import Google from "./Component/Login/Google/Google";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/loginPage",
    element: <Login></Login>,
    // children: [
    //   {
    //     path: "/facebook/login",
    //     element: <FaceBook></FaceBook>
    //   },
    //   {
    //     path: "/google/login",
    //     element: <Google></Google>,
    //   },
    // ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
