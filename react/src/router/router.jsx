import { createBrowserRouter } from "react-router-dom";

export const router =createBrowserRouter([
    {
        path : '/',
        element : <p>hi from home page </p>
    },
    {
        path : 'login',
        element : <p>hi from login page</p>
    },
    {
        path : '/register',
        element : <p>hi from register page</p>
    },
    {
        path : '/users',
        element : <p>hi from users</p>
    }
])