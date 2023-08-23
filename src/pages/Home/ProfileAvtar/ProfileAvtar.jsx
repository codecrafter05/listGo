import { useState, useEffect } from "react";
import { getUser } from "../../../utilities/users-service";
import NavBar from "../../../components/NavBar/NavBar";

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
    <>
    <NavBar user={user} setUser={setUser} />
    <div className="profile-avatar-ali">
      {/* <img src={defaultAvatar} alt="Default Avatar" className="avatar-ali" /> */}
      <div className="user-details-ali">
        <h2>{user.name}</h2> {/* Assuming user.name holds the username */}
        <p>{user.email}</p> {/* Assuming user.email holds the email */}
      </div>
    </div>
 </>
  );
}