import { useContext } from "react"
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router-dom";



export const PrivateRouter = ( { children} ) => {

    const { logged = true } = useContext( AuthContext );
    const { pathname, search} = useLocation();

    const lasthPath =  pathname + search;
    localStorage.setItem('lastpath', lasthPath);

    return (logged)
        ? children
        : <Navigate to="/login"/>
}
