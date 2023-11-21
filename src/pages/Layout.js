import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return (
        <>
        <nav>
            <ul className="navigation">
                <li className="nav-item">
                    <Link to="/Imagine">LOGO</Link>
                </li>
                <li className="nav=item">
                    <Link to="/Genres">Product-Page</Link>
                </li>
                <li className="nav=item">
                    <Link to="/cart">Cart</Link>
                </li>
                <li className="nav=item">
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
        </nav>
        <Outlet />

        <footer>
            <p>copyright text</p>
        </footer>
    </>
    )
};

export default Layout;