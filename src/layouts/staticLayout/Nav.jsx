import { NavLink } from "react-router-dom";
import './nav.css'
import logo from './../../../public/Resources/Logo.png'

const Nav = () => {
  return (
    <div>
      <div className="navbar">
        <div className="flex-1">
          <img className="w-36" src={logo} alt="" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-[#0B0B0B]">
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/donation'}>Donation</NavLink>
            </li>
            <li>
              <NavLink to={'/statistics'}>Statistics</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
