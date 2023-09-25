import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Donation from "./pages/Donation";
import Statistics from "./pages/Statistics";

const Router = createBrowserRouter([
  {
    path : '/',
    element : <MainLayout></MainLayout>,
    children : [
      {
        path : '/',
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
    ]
  }
])

export default Router;