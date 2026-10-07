import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard() {

  const appointments = [
    {
      time: "10:00 AM",
      patient: "Rahul Patel",
      doctor: "Dr. Amit Shah",
      type: "General Checkup",
      status: "Booked"
    },
    {
      time: "10:30 AM",
      patient: "Priya Shah",
      doctor: "Dr. Mehta",
      type: "Follow Up",
      status: "Booked"
    },
    {
      time: "11:00 AM",
      patient: "Amit Kumar",
      doctor: "Dr. Amit Shah",
      type: "General Checkup",
      status: "Completed"
    },
    {
      time: "11:30 AM",
      patient: "Neha Patel",
      doctor: "Dr. Mehta",
      type: "Consultation",
      status: "Booked"
    }
  ];

  return (
    <div className="app-layout">

      <Sidebar />

      <main className="main-content">

        <Navbar
          title="Dashboard"
          subtitle="Welcome back! Here's what's happening today."
        />

        <section className="page-content">

          <div className="stats-grid">

            <div className="stat-card">
              <div className="stat-icon blue">♙</div>

              <div>
                <p>Total Patients</p>
                <h2>125</h2>
                <span className="positive">↑ 8% </span>
                <small>this month</small>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon green">▣</div>

              <div>
                <p>Today's Appointments</p>
                <h2>18</h2>
                <span className="positive">↑ 5% </span>
                <small>from yesterday</small>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon purple">✓</div>

              <div>
                <p>Completed Today</p>
                <h2>10</h2>
                <span className="positive">↑ 12% </span>
                <small>from yesterday</small>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon orange">◷</div>

              <div>
                <p>Pending</p>
                <h2>8</h2>
                <span className="neutral">Today</span>
              </div>
            </div>

          </div>


          <div className="dashboard-grid">

            <div className="dashboard-card large">

              <div className="card-header">

                <div>
                  <h3>Today's Appointments</h3>
                  <p>Wednesday, October 7, 2026</p>
                </div>

                <a href="/appointments">View All →</a>

              </div>

              <div className="appointment-list">

                {appointments.map((appointment, index) => (

                  <div className="appointment-row" key={index}>

                    <div className="appointment-time">
                      <strong>{appointment.time}</strong>
                    </div>

                    <div className="patient-info">
                      <div className="small-avatar">
                        {appointment.patient
                          .split(" ")
                          .map(word => word[0])
                          .join("")
                        }
                      </div>

                      <div>
                        <strong>{appointment.patient}</strong>
                        <span>{appointment.type}</span>
                      </div>
                    </div>

                    <div className="doctor-info">
                      <span>Doctor</span>
                      <strong>{appointment.doctor}</strong>
                    </div>

                    <span
                      className={
                        appointment.status === "Completed"
                          ? "status completed"
                          : "status booked"
                      }
                    >
                      {appointment.status}
                    </span>

                  </div>

                ))}

              </div>

            </div>


            <div className="dashboard-card">

              <div className="card-header">
                <div>
                  <h3>Quick Actions</h3>
                  <p>Common tasks</p>
                </div>
              </div>

              <div className="quick-actions">

                <a href="/patients" className="quick-action">
                  <div className="quick-icon blue">+</div>
                  <div>
                    <strong>Add Patient</strong>
                    <span>Register a new patient</span>
                  </div>
                  <span>→</span>
                </a>

                <a href="/appointments" className="quick-action">
                  <div className="quick-icon green">▣</div>
                  <div>
                    <strong>Book Appointment</strong>
                    <span>Schedule an appointment</span>
                  </div>
                  <span>→</span>
                </a>

                <a href="/consultations" className="quick-action">
                  <div className="quick-icon purple">✓</div>
                  <div>
                    <strong>Consultation</strong>
                    <span>Complete consultation</span>
                  </div>
                  <span>→</span>
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;