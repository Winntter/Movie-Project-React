import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="nav justify-content-center p-2 bg-dark nav-underline">
            <NavLink to="/" className="nav-link text-white"
            >
                home
            </NavLink>
            <NavLink to="/animation" className="nav-link text-white"
            >
                animation
            </NavLink>
        </nav>
    )
}

export default NavBar;