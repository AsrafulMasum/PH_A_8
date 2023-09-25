import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Donation from "./pages/Donation";
import Statistics from "./pages/Statistics";
import DonationDetails from "./pages/DonationDetails";

const Router = createBrowserRouter([
  {
    path : '/',
    element : <MainLayout></MainLayout>,
    children : [
      {
        path : '/',
        loader : async () => await fetch("/data.json"),
        element : <Home></Home>
      },
      {
        path : '/donation',
        element : <Donation></Donation>
      },
      {
        path : '/statistics',
        element : <Statistics></Statistics>
      },
      {
        path : '/donation-details/:id',
        loader : async () => await fetch("/data.json"),
        element : <DonationDetails></DonationDetails>
      },
    ]
  }
])

export default Router;