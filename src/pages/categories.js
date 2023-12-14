import { Link, Outlet } from "react-router-dom";
import img from "../images/cat-banner.png";

const Categories = () => {
  return (
    <>
      <section className="categories-cont">
        <img src={img} className="login-banner" alt="mockup img" />
        <ul className="genres-list">
          <Link to="/categories/texture" className="genres-title">
            <li className="genres-item">
              TEXTURES
              <p className="genres-para">
                Oh, behold the wonders of randomness, where words frolic and
                sentences dance in a chaotic symphony of pure, unadulterated
                chance! Here we are, in the realm of unpredictability, where the
                sentences are as random as a chicken playing the trombone in a
                marching band of penguins!
              </p>
            </li>
          </Link>
          <Link to="/categories/chair" className="genres-title">
            <li className="genres-item">
              CHAIRS
              <p className="genres-para">
                Oh, behold the wonders of randomness, where words frolic and
                sentences dance in a chaotic symphony of pure, unadulterated
                chance! Here we are, in the realm of unpredictability, where the
                sentences are as random as a chicken playing the trombone in a
                marching band of penguins!
              </p>
            </li>
          </Link>
          <Link to="/categories/layout" className="genres-title">
            <li className="genres-item">
              LAYOUTS
              <p className="genres-para">
                Oh, behold the wonders of randomness, where words frolic and
                sentences dance in a chaotic symphony of pure, unadulterated
                chance! Here we are, in the realm of unpredictability, where the
                sentences are as random as a chicken playing the trombone in a
                marching band of penguins!
              </p>
            </li>
          </Link>
        </ul>
      </section>
      <Outlet />
    </>
  );
};

export default Categories;
