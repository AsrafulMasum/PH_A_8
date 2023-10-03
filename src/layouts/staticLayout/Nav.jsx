import { Link, NavLink } from "react-router-dom";
import "./nav.css";
import logo from "./../../../public/Resources/Logo.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/Provider";
import { ToastContainer, toast } from "react-toastify";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  const signOut = () => {
    logOut()
      .then(() => {
        toast.success("Log Out Successful.");
      })
      .catch(() => {
        toast.error("An Error Occurred.");
      });
  };

  return (
    <div>
      <div className="navbar">
        <div className="flex-1">
          <img className="w-36" src={logo} alt="" />
        </div>
        <div className="flex-none">
          <ul className="menu flex items-center menu-horizontal px-1 text-[#0B0B0B]">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink to={"/donation"}>Donation</NavLink>
                </li>
                <li>
                  <NavLink to={"/statistics"}>Statistics</NavLink>
                </li>
              </>
            )}
            <li>
              {user ? (
                <Link className="btn btn-neutral btn-sm" onClick={signOut}>
                  Log Out
                </Link>
              ) : (
                <NavLink to={"/login"}>Log In</NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Nav;
