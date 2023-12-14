import { useNavigate } from "react-router-dom";
import img from "../images/1.jpg";

function SignUp(props) {
  const navigate = useNavigate();

  function goToThanks(e) {
    e.preventDefault();
    console.log("takes us to homepage");
    navigate("/categories");
  }

  return (
    <form className="signup-cont" onSubmit={goToThanks}>
      <h1 className="signup-title">SIGN UP</h1>
      <img
        src={img}
        className="login-banner"
        alt="kids playing in music park"
      />
      <section className="signup-section">
        <label className="signup-label">
          First name:
          <input
            className="signup-input"
            type="text"
            name="firstName"
            onChange={props.handleFirstNameChange}
            placeholder="First name ..."
          />
        </label>
        <label className="signup-label">
          Last name:
          <input
            className="signup-input"
            type="text"
            name="lastName"
            onChange={props.handleLastNameChange}
            placeholder="Last name ..."
          />
        </label>
        <label className="signup-label">
          Email:
          <input
            className="signup-input"
            type="email"
            name="email"
            onChange={props.handleEmailChange}
            placeholder="Email ..."
          />
        </label>
        <label className="signup-label">
          Age:
          <input
            className="signup-input"
            type="text"
            name="age"
            onChange={props.handleAgeChange}
            placeholder="Age ..."
          />
        </label>
        <input className="signup-button" type="submit" value="SIGN UP" />
      </section>
    </form>
  );
}

export default SignUp;
