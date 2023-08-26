//file: src/pages/App.jsx
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser, logOut } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import Profile from "../../components/ProfilePage/profile";
import NavBar from "../../components/NavBar/NavBar";
import SideBarMenu from "../../components/HomePage/SideBarMenu";
import MainAppWindow from "../../components/HomePage/MainAppWindow";

import "./App.css";

function App() {
  console.log('App rendering');

  const [user, setUser] = useState(getUser());
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [selectedListId, setSelectedListId] = useState(null);

  console.log(`user logged in inside app function: ${JSON.stringify(user)}`);
  console.log('Initial isDetailsVisible:', isDetailsVisible);
  console.log('Initial selectedTaskId:', selectedTaskId);

  const handleLogout = () => {
    logOut();
    setUser(null);
  };

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} handleLogout={handleLogout} />
          <SideBarMenu user={user} selectedListId={selectedListId} setSelectedListId={setSelectedListId} />
          <Routes>
            <Route path="/" element={<MainAppWindow selectedListId={selectedListId} selectedTaskId={selectedTaskId} setSelectedTaskId={setSelectedTaskId} isDetailsVisible={isDetailsVisible} setIsDetailsVisible={setIsDetailsVisible} />} />
            <Route path="/profile" element={<Profile user={user} />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;