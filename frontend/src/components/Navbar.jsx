function Navbar({ title, subtitle }) {
  return (
    <header className="topbar">

      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="topbar-right">

        <button className="notification-btn">
          🔔
          <span className="notification-dot"></span>
        </button>

        <div className="top-user">
          <div className="avatar">AD</div>

          <div>
            <strong>Admin</strong>
            <span>Administrator</span>
          </div>
        </div>

      </div>

    </header>
  );
}

export default Navbar;