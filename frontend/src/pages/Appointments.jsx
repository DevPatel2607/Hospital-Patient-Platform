import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Appointments() {

  const [showForm, setShowForm] = useState(false);

  const [appointments, setAppointments] = useState([
    {
      id: "A001",
      time: "10:00 AM",
      patient: "Rahul Patel",
      doctor: "Dr. Amit Shah",
      date: "2026-10-07",
      status: "Booked"
    },
    {
      id: "A002",
      time: "10:30 AM",
      patient: "Priya Shah",
      doctor: "Dr. Mehta",
      date: "2026-10-07",
      status: "Booked"
    },
    {
      id: "A003",
      time: "11:00 AM",
      patient: "Amit Kumar",
      doctor: "Dr. Amit Shah",
      date: "2026-10-07",
      status: "Completed"
    }
  ]);

  const [form, setForm] = useState({
    patient: "",
    doctor: "",
    date: "2026-10-07",
    time: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const bookAppointment = (e) => {

    e.preventDefault();

    const newAppointment = {
      id: `A00${appointments.length + 1}`,
      ...form,
      status: "Booked"
    };

    setAppointments([...appointments, newAppointment]);

    setForm({
      patient: "",
      doctor: "",
      date: "2026-10-07",
      time: ""
    });

    setShowForm(false);
  };

  return (
    <div className="app-layout">

      <Sidebar />

      <main className="main-content">

        <Navbar
          title="Appointments"
          subtitle="Manage and schedule patient appointments."
        />

        <section className="page-content">

          <div className="page-actions">

            <div>
              <h2>Today's Appointments</h2>
              <p>Wednesday, October 7, 2026</p>
            </div>

            <button
              className="primary-btn"
              onClick={() => setShowForm(true)}
            >
              + Book Appointment
            </button>

          </div>


          <div className="appointment-summary">

            <div>
              <span>Total Today</span>
              <strong>{appointments.length}</strong>
            </div>

            <div>
              <span>Booked</span>
              <strong>
                {appointments.filter(a => a.status === "Booked").length}
              </strong>
            </div>

            <div>
              <span>Completed</span>
              <strong>
                {appointments.filter(a => a.status === "Completed").length}
              </strong>
            </div>

          </div>


          <div className="data-card">

            <div className="table-header appointment-table">

              <span>Time</span>
              <span>Patient</span>
              <span>Doctor</span>
              <span>Date</span>
              <span>Status</span>

            </div>


            {appointments.map((appointment) => (

              <div
                className="table-row appointment-table"
                key={appointment.id}
              >

                <strong>{appointment.time}</strong>

                <div className="patient-cell">

                  <div className="table-avatar">
                    {appointment.patient
                      .split(" ")
                      .map(word => word[0])
                      .join("")
                    }
                  </div>

                  <strong>{appointment.patient}</strong>

                </div>

                <span>{appointment.doctor}</span>

                <span>{appointment.date}</span>

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

        </section>


        {showForm && (

          <div className="modal-overlay">

            <div className="modal">

              <div className="modal-header">

                <div>
                  <h2>Book Appointment</h2>
                  <p>Schedule an appointment for a patient.</p>
                </div>

                <button
                  className="close-btn"
                  onClick={() => setShowForm(false)}
                >
                  ×
                </button>

              </div>


              <form onSubmit={bookAppointment}>

                <div className="form-group">

                  <label>Patient</label>

                  <select
                    name="patient"
                    value={form.patient}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select patient
                    </option>

                    <option value="Rahul Patel">
                      Rahul Patel
                    </option>

                    <option value="Priya Shah">
                      Priya Shah
                    </option>

                    <option value="Amit Kumar">
                      Amit Kumar
                    </option>

                    <option value="Neha Patel">
                      Neha Patel
                    </option>

                  </select>

                </div>


                <div className="form-group">

                  <label>Doctor</label>

                  <select
                    name="doctor"
                    value={form.doctor}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select doctor
                    </option>

                    <option value="Dr. Amit Shah">
                      Dr. Amit Shah
                    </option>

                    <option value="Dr. Mehta">
                      Dr. Mehta
                    </option>

                  </select>

                </div>


                <div className="form-row">

                  <div className="form-group">

                    <label>Date</label>

                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  <div className="form-group">

                    <label>Time</label>

                    <input
                      type="time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>


                <div className="modal-actions">

                  <button
                    type="button"
                    className="secondary-btn"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="primary-btn"
                  >
                    Book Appointment
                  </button>

                </div>

              </form>

            </div>

          </div>

        )}

      </main>

    </div>
  );
}

export default Appointments;