import { useEffect, useState } from "react";
import { getUser } from "../../utilities/users-service";
import "./ProfileAvtar.css";
import defaultAvatar from "../../images/default-avatar-icon-of-social-media-user-vector.jpg";

export default function ProfileAvtar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUser(); // Assuming getUser() function fetches user data from MongoDB
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <h1>Loading...</h1>; // Display a loading state while fetching user data
  }

  return (
    <div className="profile-avatar">
      <img src={defaultAvatar} alt="Default Avatar" className="avatar" />
      <div className="user-details">
        <h1>{user.name}</h1> {/* Assuming user.name holds the username */}
        <p>{user.email}</p> {/* Assuming user.email holds the email */}
      </div>
    </div>
  );
}