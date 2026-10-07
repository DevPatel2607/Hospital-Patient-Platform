import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">
        <div className="logo-icon">+</div>

        <div>
          <h2>CarePoint</h2>
          <span>Clinic Management</span>
        </div>
      </div>

      <nav className="sidebar-nav">

        <p className="menu-title">MAIN MENU</p>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span>⌂</span>
          Dashboard
        </NavLink>

        <NavLink
          to="/patients"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span>♙</span>
          Patients
        </NavLink>

        <NavLink
          to="/appointments"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span>▣</span>
          Appointments
        </NavLink>

        <NavLink
          to="/consultations"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span>▤</span>
          Consultations
        </NavLink>

      </nav>

      <div className="sidebar-bottom">

        <div className="help-box">
          <div className="help-icon">?</div>

          <div>
            <strong>Need Help?</strong>
            <p>Contact support</p>
          </div>
        </div>

        <div className="user-profile">
          <div className="avatar">AD</div>

          <div>
            <strong>Admin</strong>
            <p>Administrator</p>
          </div>

          <span className="more">⋮</span>
        </div>

      </div>

    </aside>
  );
}

export default Sidebar;