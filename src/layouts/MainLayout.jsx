import { Outlet } from "react-router-dom";
import Nav from "./staticLayout/Nav";

const MainLayout = () => {
  return (
    <div className="font-[Inter] max-w-screen-lg mx-4 xl:mx-auto">
      <div>
        <Nav></Nav>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;