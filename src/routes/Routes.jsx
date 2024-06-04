import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../layouts/Main";
import Login from "../Pages/Authentication/Login";
import Registration from "../Pages/Authentication/Register";
import AllScholarship from "../Pages/AllScholarship";
import Details from "../Pages/Details";
import Apply from "../Pages/Checkout/Apply";
import SuccessApply from "../Pages/Checkout/SuccessApply";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Dashboard/Profile";
import DashboardLayout from "../layouts/DashboardLayout";
import MyApplication from "../Pages/Dashboard/StudentMenu/MyApplication";
import Myreviews from "../Pages/Dashboard/StudentMenu/Myreviews";
import AddScholarship from "../Pages/Dashboard/ModeratorMenu/AddScholarship";
import Allreviews from "../Pages/Dashboard/ModeratorMenu/Allreviews";
import ManageScholarships from "../Pages/Dashboard/ModeratorMenu/ManageScholarships";
import UpdateScholarship from "../Pages/Dashboard/ModeratorMenu/UpdateScholarship";
import AllappliedScholarship from "../Pages/Dashboard/ModeratorMenu/AllappliedScholarship";
import Feedback from "../Pages/Dashboard/ModeratorMenu/Feedback";
import Review from "../Pages/Dashboard/StudentMenu/Review";
import UdateReview from "../Pages/Dashboard/StudentMenu/UdateReview";
import Edit from "../Pages/Dashboard/StudentMenu/Edit";
import AllUsers from "../Pages/Dashboard/AdminMenu/AllUsers";
import AddScholarshipAdmin from "../Pages/Dashboard/AdminMenu/AddScholarshipAdmin";
import ManageScholarshipAdmin from "../Pages/Dashboard/AdminMenu/ManageScholarshipAdmin";
import AllappliedScholarAd from "../Pages/Dashboard/AdminMenu/AllappliedScholarAd";
import Allreviewsad from "../Pages/Dashboard/AdminMenu/Allreviewsad";
import AdminStatistics from "../Pages/Dashboard/AdminMenu/AdminStatistics";
// import ErrorPage from '../pages/ErrorPage'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/All-Scholarship",
        element: <AllScholarship />,
      },

      {
        path: "/apply/:id",
        element: <Apply />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/apply/${params.id}`),
      },
      {
        path: "/scholar/:id",
        element: <Details />,
      },
      {
        path: "/successApply/:id",
        element: <SuccessApply />,

      },
     
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Registration /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      // -------Applicant/Student-------
      {
        path: "/dashboard/my-Application",
        element: <MyApplication />,
      },
      {
        path: "/dashboard/my-reviews",
        element: <Myreviews />,
      },
      {
        path: "/dashboard/review/:id",
        element: <Review />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/scholar/${params.id}`),
      },
      {
        path: "/dashboard/updateReview/:id",
        element: <UdateReview />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/scholar/${params.id}`),
      },
      // -------Moderator-----
      {
        path: "/dashboard/add-Scholarship",
        element: <AddScholarship />,
      },
      {
        path: "/dashboard/all-applied-Scholarship",
        element: <AllappliedScholarship />,
      },
      {
        path: "/dashboard/all-reviews",
        element: <Allreviews />,
      },
      {
        path: "/dashboard/manage-Scholarships",
        element: <ManageScholarships />,
      },
      {
        path: "/dashboard/update/:id",
        element: <UpdateScholarship />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/scholar/${params.id}`),
      },
      {
        path: "/dashboard/Feedback/:id",
        element: <Feedback />,
      },
      {
        path: "/dashboard/Edit/:id",
        element: <Edit/>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/Edit/${params.id}`),
      },
      //-------Admin
      {
        path: "/dashboard/all-users",
        element: <AllUsers/>,
      },
      {
        path: "/dashboard/add-Scholarship-admin",
        element: <AddScholarshipAdmin/>,
      },
      {
        path: "/dashboard/manage-Scholarship-admin",
        element: <ManageScholarshipAdmin/>,
      },
      {
        path: "/dashboard/all-applied-Scholarship-admin",
        element:<AllappliedScholarAd/>,
      },
      {
        path: "/dashboard/all-reviews-admin",
        element:<Allreviewsad/>,
      },
      {
        path: "/dashboard/adminStatistics",
        element:<AdminStatistics/>,
      },
    ],
  },
]);
