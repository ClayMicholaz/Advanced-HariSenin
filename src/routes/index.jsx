import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Admin from "../pages/Admin";
import VerifikasiEmail from "../pages/VerifikasiEmail";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/admin",
        element: <Admin />,
    },
    {
        path: "/verifikasi-email",
        element: <VerifikasiEmail />,
    }
]);
