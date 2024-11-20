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
import HelpLayout from "../layouts/HelpLayout";
import Dashboard from "../components/Dashboard";
import UpdateProfile from "../pages/UpdateProfile";
import DashboardLayout from "../layouts/DashboardLayout";
import ForgotPassWord from "../pages/ForgotPassWord";
// import json from "../../public/donation.json"

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
            },
            {
                path: '/auth/forgot-password',
                element: <ForgotPassWord></ForgotPassWord>
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
    },
    {
        path: '/donation/camp',
        element: <PrivateRoute>
            <DonationLayout></DonationLayout>
        </PrivateRoute>,
        children: [
            {
                path: '/donation/camp/:id',
                element: <DonationDetails></DonationDetails>,
                loader: async ({ params }) => {
                    const response = await fetch('/donation.json');
                    const donations = await response.json();
                    return donations.find((donation) => donation.id === Number(params.id));
                }
            }

        ]
    },
    {
        path: "help",
        element: <HelpLayout></HelpLayout>
    },
    {
        path: 'dashboard',
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
        ]
    },
    {
        path: 'update-profile',
        element: <PrivateRoute>
            <UpdateProfile></UpdateProfile>
        </PrivateRoute>
    },
    // {
    //     path: 'update-profile',
    //     element: <UpdateProfile></UpdateProfile>
    // },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;