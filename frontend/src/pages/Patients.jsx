import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Patients() {
  const [patients] = useState([
    {
      id: "P-1024",
      name: "Rahul Patel",
      age: 34,
      condition: "Hypertension",
      doctor: "Dr. Amit Shah",
      status: "Active"
    },
    {
      id: "P-1040",
      name: "Priya Shah",
      age: 29,
      condition: "Follow-up",
      doctor: "Dr. Mehta",
      status: "Review"
    },
    {
      id: "P-1092",
      name: "Amit Kumar",
      age: 41,
      condition: "General Checkup",
      doctor: "Dr. Amit Shah",
      status: "Active"
    },
    {
      id: "P-1120",
      name: "Neha Patel",
      age: 27,
      condition: "Consultation",
      doctor: "Dr. Mehta",
      status: "New"
    }
  ]);

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Navbar
          title="Patients"
          subtitle="Manage patient records and active follow-ups."
        />

        <section className="page-content">
          <div className="page-actions">
            <div>
              <h2>Patient Directory</h2>
              <p>Overview of all registered patients</p>
            </div>

            <button className="primary-btn">+ Add Patient</button>
          </div>

          <div className="appointment-summary">
            <div>
              <span>Total Patients</span>
              <strong>{patients.length}</strong>
            </div>

            <div>
              <span>Active</span>
              <strong>
                {patients.filter((patient) => patient.status === "Active").length}
              </strong>
            </div>

            <div>
              <span>New</span>
              <strong>
                {patients.filter((patient) => patient.status === "New").length}
              </strong>
            </div>
          </div>

          <div className="data-card">
            <div className="table-header appointment-table">
              <span>Patient</span>
              <span>Age</span>
              <span>Condition</span>
              <span>Doctor</span>
              <span>Status</span>
            </div>

            {patients.map((patient) => (
              <div className="table-row appointment-table" key={patient.id}>
                <div className="patient-cell">
                  <div className="table-avatar">
                    {patient.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>

                  <div>
                    <strong>{patient.name}</strong>
                    <small>{patient.id}</small>
                  </div>
                </div>

                <span>{patient.age}</span>
                <span>{patient.condition}</span>
                <span>{patient.doctor}</span>
                <span
                  className={
                    patient.status === "Active"
                      ? "status completed"
                      : patient.status === "Review"
                        ? "status booked"
                        : "status booked"
                  }
                >
                  {patient.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Patients;
