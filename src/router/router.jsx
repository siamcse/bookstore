import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Books from "../pages/Books/Books";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/books",
        element: <Books />
    }
])