import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM, { createRoot } from "react-dom/client";
import React from "react";
import Login from "../components/login";
import AdminLogin from "../components/employee-detail";
import Dashboard from "../components/employee-edit";
import EmployeeDetail from "../components/employee-detail";
import EmployeeEdit from "../components/employee-edit";
import Home from "../components/home";
import Employee from "../components/employee";
import PrivateRoute from "../components/private-route";
import Category from "../components/category";
import Profile from "../components/profile";
import AddCategory from "../components/add-category";
import AddEmployee from "../components/add-employee";

// import "./global.css";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/admin-login",
    element: <AdminLogin />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      { path: "home", element: <Home /> },
      { path: "employee", element: <Employee /> },
      {
        path: "employee/employee-edit/:id",
        element: <EmployeeEdit />,
      },
      { path: "category", element: <Category /> },
      { path: "profile", element: <Profile /> },
      { path: "category/add-category", element: <AddCategory /> },
      { path: "employee/add-employee", element: <AddEmployee /> },
      // Add more nested routes here as needed
    ],
  },
  {
    path: "/employee-detail/:id",
    element: (
      <PrivateRoute>
        <EmployeeDetail />
      </PrivateRoute>
    ),
  },
]);
