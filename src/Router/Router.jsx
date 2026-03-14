import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
const Router = createBrowserRouter(
    [
        {
            path:'/',
            element:<MainLayout></MainLayout>,
            children: [
                {
                    path:'/',
                    element: <Home></Home>
                },
                {
                    path:'/about',
                    element:<About></About>
                }
            ]
        }
    ]
)

export default Router;