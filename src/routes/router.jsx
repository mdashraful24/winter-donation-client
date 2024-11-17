import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import DonationCamp from "../components/DonationCamp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "donationCamp",
                element: <DonationCamp></DonationCamp>
            }
        ]
    },
])

export default router;