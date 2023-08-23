import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import ProfileAvtar from "../Home/ProfileAvtar/ProfileAvtar";
import Home from "../Home/Home"
import "./App.css";


function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <Routes>
            {/* Route components in here */}
            <Route path="/profile" element={<ProfileAvtar />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
