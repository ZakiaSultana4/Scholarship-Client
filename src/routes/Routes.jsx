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
import ErrorPage from "../Pages/Err/ErrorPage";
import AdminRoute from "./AdminRoute";
import ModeratorMenu from "../components/Dashboard/Menu/ModeratorMenu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
        element: (
          <PrivateRoute>
            <Apply />,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/apply/${params.id}`),
      },

      {
        path: "/scholar/:id",
        element: (
          <PrivateRoute>
            <Details />,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/scholar/${params.id}`),
      },
      {
        path: "/successApply/:id",
        element: (
          <PrivateRoute>
            <SuccessApply />,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/scholar/${params.id}`),
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
        element: (
          <PrivateRoute>
            <MyApplication />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-reviews",
        element: (
          <PrivateRoute>
            <Myreviews />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/review/:id",
        element: (
          <PrivateRoute>
            <Review />
          </PrivateRoute>
        ),

        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/scholar/${params.id}`),
      },
      {
        path: "/dashboard/updateReview/:id",
        element: (
          <PrivateRoute>
            <UdateReview />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/scholar/${params.id}`),
      },
      // -------Moderator-----
      {
        path: "/dashboard/add-Scholarship",
        element: (
          <PrivateRoute>
            <ModeratorMenu>
            <AddScholarship />
            </ModeratorMenu>
              
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-applied-Scholarship",
        element: (
          <PrivateRoute>
               <ModeratorMenu>
              
            <AllappliedScholarship />,
              </ModeratorMenu>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-reviews",
        element: (
          <PrivateRoute>
               <ModeratorMenu>
              
            <Allreviews />,
              </ModeratorMenu>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/manage-Scholarships",
        element: (
          <PrivateRoute>
               <ModeratorMenu>
              
            <ManageScholarships />,
              </ModeratorMenu>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/update/:id",
        element: (
          <PrivateRoute>
            <UpdateScholarship />,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/scholar/${params.id}`),
      },
      {
        path: "/dashboard/Feedback/:id",
        element: (
          <PrivateRoute>
            <Feedback />,
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/Edit/:id",
        element: (
          <PrivateRoute>
            <Edit />,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/Edit/${params.id}`),
      },
      //-------Admin
      {
        path: "/dashboard/all-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllUsers />,
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-Scholarship-admin",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AddScholarshipAdmin />,
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/manage-Scholarship-admin",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageScholarshipAdmin />,
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-applied-Scholarship-admin",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllappliedScholarAd />,
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-reviews-admin",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Allreviewsad />,
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/adminStatistics",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdminStatistics />,
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
