import { Outlet, Link } from "react-router-dom";

const Layout = ({}) => {
  return (
    <>
      <nav>
        <ul className="navigation">
          <li className="nav-item">
            <Link to="/categories">VS</Link>
          </li>
          <li className="nav=item">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="nav=item">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="nav=item">
            <Link to="/">Log Out</Link>
          </li>
        </ul>
      </nav>
      <Outlet />

      <footer>
        <p>&copy;VIRTUAL STORE ALL RIGHTS RECIEVED</p>
      </footer>
    </>
  );
};

export default Layout;
