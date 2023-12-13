import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return (
        <>
        <nav>
            <ul className="navigation">
                <li className="nav-item">
                    <Link to="/categories">LOGO</Link>
                </li>
                {/* <li className="nav=item">
                    <Link to="/categories/product">Product-Page</Link>
                </li> */}
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
            <p>&copy; VIRTUAL STORE all rights recieved</p>
        </footer>
    </>
    )
};

export default Layout;