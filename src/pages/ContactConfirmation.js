import { useNavigate } from "react-router-dom";

function ProfileEdit({ userProfile, onProfileChange }) {
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onProfileChange({ ...userProfile, [name]: value });
  };

  function goToThanks(e) {
    e.preventDefault();
    navigate("/categories");
  }

  return (
    <form className="profile-edit-form" onSubmit={goToThanks}>
      <h1 className="profile-edit-title">EDIT PROFILE</h1>
      <section className="profile-edit-section">
        <label className="profile-edit-label">
          First name:
          <input
            className="profile-edit-input"
            type="text"
            name="firstName"
            onChange={handleInputChange}
            value={userProfile.firstName}
          />
        </label>
        <label className="profile-edit-label">
          Last name:
          <input
            className="profile-edit-input"
            type="text"
            name="lastName"
            onChange={handleInputChange}
            value={userProfile.lastName}
          />
        </label>
        <label className="profile-edit-label">
          Email:
          <input
            className="profile-edit-input"
            type="text"
            name="email"
            onChange={handleInputChange}
            value={userProfile.email}
          />
        </label>
        <label className="profile-edit-label">
          Phone number:
          <input
            className="profile-edit-input"
            type="text"
            name="phoneNumber"
            onChange={handleInputChange}
            value={userProfile.phoneNumber}
          />
        </label>
      </section>
      <input className="profile-edit-submit" type="submit" value="Submit" />
    </form>
  );
}

export default ProfileEdit;
