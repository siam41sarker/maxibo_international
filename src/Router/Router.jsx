import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";

import Services from "../Pages/Services/Services";
import InstallationSetup from "../Pages/InstallationSetup/InstallationSetup";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import TrainingAndEducation from "../Pages/TrainingAndEducation/TrainingAndEducation";
import Consultancy from "../Pages/Consultancy/Consultancy";
import Partners from "../Pages/Partners/Partners";
import Products from "../Pages/Products/Products";
import Contact from "../Pages/Contact/Contact";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import Terms from "../Pages/Terms/Terms";
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
                },
                {
                    path:'/services',
                    element:<Services></Services>
                },
                {
                    path:'/services/Installation',
                    element:<InstallationSetup></InstallationSetup>
                },
                {
                    path:'/services/trainingandeducation',
                    element:<TrainingAndEducation></TrainingAndEducation>
                },
                {
                    path:'/services/consultancy',
                    element:<Consultancy></Consultancy>
                },
                {
                    path:'/partners',
                    element:<Partners></Partners>
                },
                {
                    path:'/products',
                    element:<Products></Products>
                },
                {
                    path:'/contact',
                    element:<Contact></Contact>
                },
                {
                    path:'/privacy',
                    element:<PrivacyPolicy></PrivacyPolicy>
                },
                {
                    path:'/terms',
                    element:<Terms></Terms>
                },
                {
                    path:'*',
                    element:<ErrorPage></ErrorPage>
                }
            ]
        }
    ]
)

export default Router;