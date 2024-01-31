import { NavLink } from "react-router-dom";

const NavItem = ({ to, text }) => (
    <NavLink to={to} className="px-4 py-2 text-secondary hover:text-white transition duration-300 ease-in-out">
        {text}  
    </NavLink>
);

export default NavItem;