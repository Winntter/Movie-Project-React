import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <p>Not Found </p>
            <Link to="/">Back Home</Link>
        </>
    )
}

export default NotFound;