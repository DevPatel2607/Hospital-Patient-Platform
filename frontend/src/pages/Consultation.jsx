import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Consultations() {

  const [selectedPatient, setSelectedPatient] = useState(null);

  const [consultations, setConsultations] = useState([
    {
      id: "C001",
      patient: "Amit Kumar",
      doctor: "Dr. Amit Shah",
      date: "2026-10-07",
      bloodPressure: "118/78",
      temperature: "98.4°F",
      notes: "Regular follow-up consultation.",
      status: "Completed"
    }
  ]);

  const [form, setForm] = useState({
    patient: "",
    doctor: "",
    bloodPressure: "",
    temperature: "",
    notes: ""
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const completeConsultation = (e) => {

    e.preventDefault();

    const newConsultation = {
      id: `C00${consultations.length + 1}`,
      ...form,
      date: "2026-10-07",
      status: "Completed"
    };

    setConsultations([
      ...consultations,
      newConsultation
    ]);

    setForm({
      patient: "",
      doctor: "",
      bloodPressure: "",
      temperature: "",
      notes: ""
    });

    alert("Consultation completed successfully!");

  };

  const viewHistory = (patient) => {

    const history = consultations.filter(
      consultation => consultation.patient === patient
    );

    setSelectedPatient({
      name: patient,
      history
    });

  };

  return (
    <div className="app-layout">

      <Sidebar />

      <main className="main-content">

        <Navbar
          title="Consultations"
          subtitle="Enter patient vitals and consultation notes."
        />

        <section className="page-content">

          <div className="page-actions">

            <div>
              <h2>Consultation</h2>
              <p>Complete consultations for today's appointments.</p>
            </div>

          </div>


          <div className="consultation-grid">

            <div className="data-card consultation-form-card">

              <div className="card-title">

                <div>
                  <h3>New Consultation</h3>
                  <p>Enter patient consultation details.</p>
                </div>

                <span className="form-badge">
                  Doctor
                </span>

              </div>


              <form onSubmit={completeConsultation}>

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


                <div className="vitals-section">

                  <h4>Vitals</h4>

                  <div className="form-row">

                    <div className="form-group">

                      <label>
                        Blood Pressure
                      </label>

                      <input
                        type="text"
                        name="bloodPressure"
                        placeholder="e.g. 120/80"
                        value={form.bloodPressure}
                        onChange={handleChange}
                        required
                      />

                    </div>


                    <div className="form-group">

                      <label>
                        Temperature
                      </label>

                      <input
                        type="text"
                        name="temperature"
                        placeholder="e.g. 98.6°F"
                        value={form.temperature}
                        onChange={handleChange}
                        required
                      />

                    </div>

                  </div>

                </div>


                <div className="form-group">

                  <label>Consultation Notes</label>

                  <textarea
                    name="notes"
                    rows="5"
                    placeholder="Enter short consultation notes..."
                    value={form.notes}
                    onChange={handleChange}
                    required
                  ></textarea>

                </div>


                <button
                  type="submit"
                  className="primary-btn full-btn"
                >
                  ✓ Mark Consultation Complete
                </button>

              </form>

            </div>


            <div className="data-card">

              <div className="card-title">

                <div>
                  <h3>Completed Consultations</h3>
                  <p>Patient consultation history.</p>
                </div>

              </div>


              <div className="consultation-history">

                {consultations.map((consultation) => (

                  <div
                    className="history-item"
                    key={consultation.id}
                  >

                    <div className="history-top">

                      <div className="patient-cell">

                        <div className="table-avatar">
                          {consultation.patient
                            .split(" ")
                            .map(word => word[0])
                            .join("")
                          }
                        </div>

                        <div>
                          <strong>
                            {consultation.patient}
                          </strong>

                          <span>
                            {consultation.date}
                          </span>
                        </div>

                      </div>

                      <span className="status completed">
                        Completed
                      </span>

                    </div>


                    <div className="vitals-display">

                      <div>
                        <span>Blood Pressure</span>
                        <strong>
                          {consultation.bloodPressure}
                        </strong>
                      </div>

                      <div>
                        <span>Temperature</span>
                        <strong>
                          {consultation.temperature}
                        </strong>
                      </div>

                    </div>


                    <p className="notes">
                      {consultation.notes}
                    </p>


                    <button
                      className="history-btn"
                      onClick={() =>
                        viewHistory(consultation.patient)
                      }
                    >
                      View Patient History →
                    </button>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>


        {selectedPatient && (

          <div className="modal-overlay">

            <div className="modal history-modal">

              <div className="modal-header">

                <div>
                  <h2>
                    {selectedPatient.name}
                  </h2>

                  <p>
                    Completed consultation history
                  </p>
                </div>

                <button
                  className="close-btn"
                  onClick={() =>
                    setSelectedPatient(null)
                  }
                >
                  ×
                </button>

              </div>


              {selectedPatient.history.length === 0 ? (

                <div className="empty-state">
                  No completed consultations found.
                </div>

              ) : (

                selectedPatient.history.map((item) => (

                  <div
                    className="history-detail"
                    key={item.id}
                  >

                    <div className="history-date">
                      {item.date} • {item.doctor}
                    </div>

                    <div className="detail-vitals">

                      <div>
                        <span>Blood Pressure</span>
                        <strong>
                          {item.bloodPressure}
                        </strong>
                      </div>

                      <div>
                        <span>Temperature</span>
                        <strong>
                          {item.temperature}
                        </strong>
                      </div>

                    </div>

                    <div className="detail-notes">

                      <strong>Notes</strong>

                      <p>{item.notes}</p>

                    </div>

                  </div>

                ))

              )}

            </div>

          </div>

        )}

      </main>

    </div>
  );
}

export default Consultations;