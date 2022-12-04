// import React from "react";
import App from "./components/App/App";
// import ReactDOM from "react-dom/client";
// import CaloriesRoute from "./routes/CaloriesRoute";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
// } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "calories",
//     element: <CaloriesRoute />,
//   },

// ]);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//   <React.StrictMode>
//      <RouterProvider router={router} />
//   </React.StrictMode>
// );