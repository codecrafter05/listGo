//file: src/pages/App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import ProfileAvtar from "../ProfileAvtar/ProfileAvtar";
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

  console.log(`user logged insind app function: ${JSON.stringify(user)}`);
  console.log('Initial isDetailsVisible:', isDetailsVisible);
  console.log('Initial selectedTaskId:', selectedTaskId);

  return (
    <main className="App">
      {user ? (
        <>
          <MainAppWindow selectedListId={selectedListId} selectedTaskId={selectedTaskId} setSelectedTaskId={setSelectedTaskId} isDetailsVisible={isDetailsVisible} setIsDetailsVisible={setIsDetailsVisible} />
          <NavBar user={user} setUser={setUser} />
          <SideBarMenu user={user} selectedListId={selectedListId} setSelectedListId={setSelectedListId} />
          <Routes>
            {/* Route components in here */}
            <Route path="/profile/new" element={<ProfileAvtar />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;