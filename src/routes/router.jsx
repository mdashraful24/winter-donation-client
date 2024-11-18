import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DonationCamp from "../pages/DonationCamp";
import PrivateRoute from "./PrivateRoute";
import DonationLayout from "../layouts/DonationLayout";
import DonationDetails from "../pages/DonationDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>
    },
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: "donation",
        element: <DonationCamp></DonationCamp>
    },
    {
        path: '/donation/camp',
        element: <PrivateRoute>
            <DonationLayout></DonationLayout>
        </PrivateRoute>,
        children: [
            {
                path: 'details/:id',
                element: <DonationDetails></DonationDetails>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;