import {NavLink} from "react-router-dom";
import { Typography } from "@material-ui/core";

export default function Logo() { 
    return (
        <div className="flex flex-row space-x-4">
            <NavLink to="/" exact={true} activeClassName="active" className="nav-link">
                <Typography variant="h6" color="inherit">
                    Logo
                </Typography>
            </NavLink>
        </div>   
    );
}