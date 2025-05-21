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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/add-to-find-roommate",
        Component: AddRoommate,
      },
      {
        path: "/browse-listing",
        Component: BrowseListing,
      },
      {
        path: "/my-listings",
        Component: MyListing,
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
    ],
  },
]);
