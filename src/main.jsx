import React from 'react'
import ReactDOM from 'react-dom/client'
import './variable.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Layout from './shared/Layout.jsx';
import ContactUs from './pages/ContactUs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/contact-us', element: <ContactUs /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);