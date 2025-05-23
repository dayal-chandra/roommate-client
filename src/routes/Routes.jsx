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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:3000/roommates"),
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
        loader: () => fetch("http://localhost:3000/browse-listing"),
        hydrateFallbackElement: <Loading></Loading>,
        Component: BrowseListing,
      },
      {
        path: "/my-listings",
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
        path: "/roommate-details/:id",
        loader: () => fetch("http://localhost:3000/browse-listing"),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRoute>
            <RoommateDetails></RoommateDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
