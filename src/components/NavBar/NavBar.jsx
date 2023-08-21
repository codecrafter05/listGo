import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
      <div className="header">
        <div className="header-left">
          <a href="admin-dashboard.html" className="logo">
            <img src="assets/img/logo.png" width="40" height="40" alt="Logo" />
          </a>
          <a href="admin-dashboard.html" className="logo2">
            <img src="assets/img/logo2.png" width="40" height="40" alt="Logo" />
          </a>
        </div>
        <a id="mobile_btn" className="mobile_btn" href="#sidebar">
          <i className="fa-solid fa-bars"></i>
        </a>
        <ul className="nav user-menu">
          <li className="nav-item">
            <div className="top-nav-search">
              <a href="javascript:void(0);" className="responsive-search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
              <form action="search.html">
                <input className="form-control" type="text" placeholder="Search here" />
                <button className="btn" type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
          </li>
          <li className="nav-item dropdown has-arrow main-drop">
            <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
              <span className="user-img">
                <img src="assets/img/profiles/avatar-21.jpg" alt="User Image" />
                <span className="status online"></span>
              </span>
              <span>UserName</span>
            </a>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/profile">My Profile</Link>
              <Link to="" className="dropdown-item" onClick={handleLogOut}>
                Log Out
              </Link>
            </div>
          </li>
        </ul>
        <div className="dropdown mobile-user-menu">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-end">
            <Link className="dropdown-item" to="/profile">
              My Profile
            </Link>
            <Link to="" className="dropdown-item" onClick={handleLogOut}>
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}