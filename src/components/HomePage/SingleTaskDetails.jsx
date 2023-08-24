//file : src\components\HomePage\SingleTaskDetails.jsx
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TaskNotes from './TaskDetails/TaskNotes';
import TaskLog from './TaskDetails/TaskLog';
import TaskCommentInput from './TaskDetails/TaskCommentInput';
import '../../index.css'

export default function SingleTaskDetails({ onRemove, allowedUserId, currentUserId, isDetailsVisible }) {
    const [notes, setNotes] = useState('');
    const [assignedUser, setAssignedUser] = useState(null);
    const [dueDate, setDueDate] = useState(new Date('Mar 26, 2019'));

    const users = [
        { id: 1, name: 'Richard Miles', role: 'Web Developer' },
        { id: 2, name: 'John Smith', role: 'Android Developer' },
        { id: 3, name: 'Jeffery Lalor', role: 'Team Leader' },
    ];

    const handleAssignClick = (user) => {
        setAssignedUser(user);
    };

    const handleDateChange = (date) => {
        setDueDate(date);
      };
      
    // to check if the current user’s ID matches the allowed user’s ID before rendering the component. 
    if (currentUserId !== allowedUserId) {
        return null;
    }

    return (
        <>
            <div className={`${isDetailsVisible ? 'sayedshow' : 'sayedhide'} col-lg-5 message-view task-chat-view task-right-sidebar`}>
                <div className="chat-window">
                    <div className="fixed-header">
                        <div className="navbar">
                            <div className="task-assign">
                                <h3>Task Title</h3>
                            </div>
                        </div>
                    </div>
                    <div className="chat-contents task-chat-contents">
                        <div className="chat-content-wrap">
                            <div className="chat-wrap-inner">
                                <div className="chat-box">
                                    <div className="chats">
                                        <h4>Task Details </h4>
                                        <div className="task-header">
                                            <div className="assignee-info">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#assignee">
                                                    <div className="avatar">
                                                        <img src="assets/img/profiles/avatar-02.jpg" alt="User Image" />
                                                    </div>
                                                    <div className="assigned-info">
                                                        <div className="task-head-title">Assigned To</div>
                                                        <div className="task-assignee">{assignedUser || 'None'}</div>
                                                    </div>
                                                </a>
                                                <span className="remove-icon" onClick={onRemove}>
                                                    <i className="fa fa-close"></i>
                                                </span>
                                            </div>
                                            <div className="task-due-date">
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#dueDate">
                                            <div className="due-icon">
                                            <span>
                                                <i className="material-icons">date_range</i>
                                            </span>
                                            </div>
                                            <div className="due-info">
                                            <div className="task-head-title">Due Date</div>
                                            <div className="due-date">{dueDate.toDateString()}</div>
                                            </div>
                                        </a>
                                        <span className="remove-icon">
                                            <i className="fa fa-close"></i>
                                        </span>
                                        </div>
                                        </div>    
                                        <TaskNotes />
                                        <TaskLog />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TaskCommentInput />
                </div>
            </div>

            <div id="assignee" className="modal custom-modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Assign to this task</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group m-b-30">
                                <input placeholder="Search to add" className="form-control search-input" type="text"></input>
                                <button className="btn btn-primary">Search</button>
                            </div>
                            <div>
                                <ul className="chat-user-list">
                                    <div>
                                        <ul>
                                            {users.map((user) => (
                                                <li key={user.id}>
                                                    <a href="#" onClick={() => handleAssignClick(user.name)}>
                                                        <div className="chat-block d-flex">
                                                            <div className="avatar">
                                                                <img src="assets/img/profiles/avatar-02.jpg" alt="User Image" />
                                                            </div>
                                                            <div className="media-body align-self-center text-nowrap">
                                                                <div className="user-name">{user.name}</div>
                                                                <span className="designation">{user.role}</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </ul>
                            </div>
                            <div className="submit-section">
                                {/* <button className="btn btn-primary submit-btn" onClick={handleAssignClick}>Assign</button> */}
                                <button type="button" className="btn btn-primary submit-btn" data-bs-dismiss="modal" aria-label="Close">
                                    Assign
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="dueDate" className="modal custom-modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Select a Due Date</h5>
                        <span aria-hidden="true">&times;</span>
                    </div>
                    <div className="modal-body">
                        <div className="input-block mb-3 col-md-6">
                        <div className="cal-icon">
                            <DatePicker
                            className="form-control datetimepicker"
                            selected={dueDate}
                            onChange={handleDateChange}
                            />
                        </div>
                        </div>
                        <div className="submit-section">
                        <button className="btn btn-primary submit-btn" data-bs-dismiss="modal" aria-label="Close">
                            Assign
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </>

    );
}


