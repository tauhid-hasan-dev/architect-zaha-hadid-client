import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddService from "../pages/AddService/AddService";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import EditReview from "../pages/MyReviews/EditReview";
import MyReview from "../pages/MyReviews/MyReview";
import ErrorElement from "../pages/Other/ErrorElement";
import NotFound from "../pages/Other/NotFound";
import ServiceDetails from "../pages/Services/ServiceDetails";
import Services from "../pages/Services/Services";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/myreview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: '/servicedetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                errorElement: <ErrorElement></ErrorElement>,
                loader: ({ params }) => fetch(`https://architect-tauhid-hasan-server.vercel.app/servicedetails/${params.id}`)
            },
            {
                path: '/editreview/:id',
                element: <EditReview></EditReview>,
                errorElement: <ErrorElement></ErrorElement>,
                loader: ({ params }) => fetch(`https://architect-tauhid-hasan-server.vercel.app/reviews/${params.id}`)
            },


        ]
    },
    { path: '*', element: <NotFound></NotFound> }

])