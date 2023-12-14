import { useNavigate } from "react-router-dom";

function Profile({ userProfile }) {
  const navigate = useNavigate();

  function goToProfileEdit(e) {
    e.preventDefault();
    console.log("Navigating to profile edit");
    navigate("profileedit");
  }

  return (
    <form onSubmit={goToProfileEdit} className="profile-form">
      <h1 className="profile-title">Profile Page</h1>

      <div className="profile-details">
        <div className="profile-detail-item">
          <h2 className="detail-title">Name:</h2>
          <p className="detail-info">{userProfile.firstName}</p>
        </div>
        <div className="profile-detail-item">
          <h2 className="detail-title">Last Name:</h2>
          <p className="detail-info">{userProfile.lastName}</p>
        </div>
        <div className="profile-detail-item">
          <h2 className="detail-title">Email:</h2>
          <p className="detail-info">{userProfile.email}</p>
        </div>
        <div className="profile-detail-item">
          <h2 className="detail-title">Phone Number:</h2>
          <p className="detail-info">{userProfile.phoneNumber}</p>
        </div>
      </div>

      {/* didnt have enough time so just left it as static */}
      <input
        className="edit-profile-button"
        type="submit"
        value="Edit profile"
      />
      <div className="past-orders-section">
        <h2 className="orders-title">Past Orders</h2>
        <div className="order-item">
          <p className="order-number">Order #12345</p>
          <p className="order-date">Date: 01/01/2023</p>
          <p className="order-status">Status: Delivered</p>
        </div>
        <div className="order-item">
          <p className="order-number">Order #12345</p>
          <p className="order-date">Date: 01/01/2023</p>
          <p className="order-status">Status: Delivered</p>
        </div>
      </div>
    </form>
  );
}

export default Profile;
