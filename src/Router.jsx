import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Donation from "./pages/Donation";
import Statistics from "./pages/Statistics";
import DonationDetails from "./pages/DonationDetails";
import Error from "./utility/Error";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
  {
    path : '/',
    element : <MainLayout></MainLayout>,
    errorElement : <Error></Error>,
    children : [
      {
        path : '/',
        loader : async () => await fetch("/data.json"),
        element : <Home></Home>
      },
      {
        path : '/donation',
        loader : async () => await fetch("/data.json"),
        element : <PrivateRoute><Donation></Donation></PrivateRoute>
      },
      {
        path : '/statistics',
        loader : async () => await fetch("/data.json"),
        element : <PrivateRoute><Statistics></Statistics></PrivateRoute>
      },
      {
        path : '/donation-details/:id',
        loader : async () => await fetch("/data.json"),
        element : <PrivateRoute><DonationDetails></DonationDetails></PrivateRoute>
      },
      {
        path : '/signup',
        element : <SignUp></SignUp>
      },
      {
        path : '/login',
        element : <Login></Login>
      }
    ]
  }
])

export default Router;