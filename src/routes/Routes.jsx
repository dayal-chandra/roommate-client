import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../components/Home";
import AddRoommate from "../pages/AddRoommate";
import BrowseListing from "../pages/BrowseListing";
import MyListing from "../pages/MyListing";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Terms from "../pages/Terms";
import PrivateRoute from "../provider/PrivateRoute";
import RoommateDetails from "../pages/RoommateDetails";
import Loading from "../components/Loading";
import UpdateRoommate from "../pages/UpdateRoommate";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Overview from "../pages/Overview";
import AllItems from "../pages/AllItems";
import MyItems from "../pages/MyItems";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () =>
          fetch("https://roommate-server-five.vercel.app/roommates"),
        hydrateFallbackElement: <Loading></Loading>,
        Component: Home,
      },
      {
        path: "/add-to-find-roommate",
        element: (
          <PrivateRoute>
            <AddRoommate></AddRoommate>
          </PrivateRoute>
        ),
      },
      {
        path: "/browse-listing",
        loader: () =>
          fetch("https://roommate-server-five.vercel.app/browse-listing"),
        hydrateFallbackElement: <Loading></Loading>,
        Component: BrowseListing,
      },
      {
        path: "/my-listings",
        loader: () =>
          fetch("https://roommate-server-five.vercel.app/browse-listing"),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRoute>
            <MyListing></MyListing>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: Signup,
      },
      {
        path: "/terms",
        Component: Terms,
      },
      {
        path: "/about-us",
        Component: AboutUs,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/roommate-details/:id",
        loader: () =>
          fetch("https://roommate-server-five.vercel.app/browse-listing"),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRoute>
            <RoommateDetails></RoommateDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-roommate/:id",
        loader: () =>
          fetch("https://roommate-server-five.vercel.app/browse-listing"),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRoute>
            <UpdateRoommate></UpdateRoommate>
          </PrivateRoute>
        ),
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          {
            index: true,
            element: <Overview />,
          },
          {
            path: "all-items",
            element: <AllItems />,
          },
          {
            path: "my-items",
            element: <MyItems></MyItems>,
          },
        ],
      },
    ],
  },
]);
