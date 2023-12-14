import { useNavigate } from "react-router-dom";

function ForgotPassword(props) {
  const navigate = useNavigate();

  function goToThanks(e) {
    e.preventDefault();
    navigate("/categories");
  }

  return (
    <form onSubmit={goToThanks} className="forgot-password-form">
      <h1 className="forgot-password-title">Forgot Password</h1>
      <section className="forgot-password-section">
        <label className="forgot-password-label">
          Email:
          <input
            className="forgot-password-input"
            type="text"
            name="email"
            onChange={props.handleEmailChange}
            placeholder="Email ..."
          />
        </label>

        <label className="forgot-password-label">
          Activation Code:
          <input
            className="forgot-password-input"
            type="text"
            name="activationCode"
            onChange={props.handleActivationCodeChange}
            placeholder="Activation Code ..."
          />
        </label>
        <input
          className="forgot-password-submit"
          type="submit"
          value="Submit"
        />
      </section>
    </form>
  );
}

export default ForgotPassword;
