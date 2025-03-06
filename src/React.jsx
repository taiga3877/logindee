import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Element/Home/Home";
import LoginForm from "./Element/Login/Login";
import Banner from "./Element/Banner/Banner";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <div>Error 404 - Page Not Found</div>,
        children: [
            {
                index: '/home',
                element: <Home />,
            },
            {
                path: '/login',
                element: <LoginForm />,
            },
            {
                path: "/baner",
                element: <Banner />,
            },
        ],
    },
]);
