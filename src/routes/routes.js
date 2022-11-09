import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddService from "../pages/AddService/AddService";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import EditReview from "../pages/MyReviews/EditReview";
import MyReview from "../pages/MyReviews/MyReview";
import ServiceDetails from "../pages/Services/ServiceDetails";
import Services from "../pages/Services/Services";

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
                element: <MyReview></MyReview>
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
                path: 'addservice',
                element: <AddService></AddService>
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
                loader: ({ params }) => fetch(`http://localhost:5000/servicedetails/${params.id}`)
            },
            {
                path: '/editreview/:id',
                element: <EditReview></EditReview>,
                loader: ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`)
            }

        ]
    }
])