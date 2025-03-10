import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx"
import Login from "../pages/Login.jsx"
import Register from "../pages/Register.jsx"
import Users from "../pages/Users.jsx"
import NotFound from "../pages/NotFound.jsx"
import Layout from "../layouts/Layout.jsx";
import StudentDashboardLayout from "../layouts/student/StudentDashboardLayout.jsx";
import GuestLayout from "../layouts/GuestLayout.jsx";
import StudentDashboard from "../components/Student/StudentDashboard.jsx";

export const LOGIN_ROUTE = "/login";
export const STUDENT_DASHBOARD_ROUTE = '/student/dashboard'

export const router =createBrowserRouter([
    {
        element : <Layout/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },

            {
                path : '*',
                element : <NotFound/>
            }
        ]
    },

    {
        element : <GuestLayout/>,
        children : [
            {
                path : LOGIN_ROUTE,
                element : <Login />
            },
            {
                path : '/register',
                element : <Register/>
            },
        ]

    },

    {
        element : <StudentDashboardLayout/>,
        children : [
            {
                path : STUDENT_DASHBOARD_ROUTE,
                element : <StudentDashboard/>
            },
        ]

    }

])