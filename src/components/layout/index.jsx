import { Outlet } from "react-router-dom";
import NavBar from "../navbar/navBar";

function Layout() {
    return (
        <>
            <NavBar/>
            <Outlet/>
        </>
    )
}

export default Layout;