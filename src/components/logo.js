import {NavLink} from "react-router-dom";

export default function Logo() { 
    return (
        <NavLink to="/" className="logo">
            <h1 className="text-4xl font-bolder text-white font-mono">Saluru</h1>
        </NavLink>
    );
}