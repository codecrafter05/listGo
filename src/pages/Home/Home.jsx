import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import NavBar from "../../components/NavBar/NavBar";
import SideBarMenu from "../../components/HomePage/SideBarMenu";
import ChatWindow from "../../components/HomePage/ChatWindow/ChatWindow";
import "../App/App.css";
import TaskDetails from "../../components/HomePage/SingleTaskDetails";
import TaskLog from "../../components/HomePage/TaskDetails/TaskLog";
import TaskCommentInput from "../../components/HomePage/TaskDetails/TaskCommentInput";

function Home() {
  const [user, setUser] = useState(getUser());

  return (
        <>
        {/* fsdfsd */}
          <div class="page-wrapper">
            <div class="chat-main-row">
              <div class="chat-main-wrapper">
                <ChatWindow />
                <TaskDetails />
              </div>
            </div>
          </div>
          <NavBar user={user} setUser={setUser} />
          <SideBarMenu />
        </>
  );
}

export default Home;
