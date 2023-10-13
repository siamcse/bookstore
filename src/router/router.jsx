import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Books from "../pages/Books/Books";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import BookDetails from "../pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/books",
        element: <Books />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/book-details/:id",
        element: <BookDetails />
    }
])