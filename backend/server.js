const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const patients = [
  {
    id: 'P-1024',
    name: 'Rahul Patel',
    age: 34,
    condition: 'Hypertension',
    doctor: 'Dr. Amit Shah',
    status: 'Active',
  },
  {
    id: 'P-1040',
    name: 'Priya Shah',
    age: 29,
    condition: 'Follow-up',
    doctor: 'Dr. Mehta',
    status: 'Review',
  },
  {
    id: 'P-1092',
    name: 'Amit Kumar',
    age: 41,
    condition: 'General Checkup',
    doctor: 'Dr. Amit Shah',
    status: 'Active',
  },
  {
    id: 'P-1120',
    name: 'Neha Patel',
    age: 27,
    condition: 'Consultation',
    doctor: 'Dr. Mehta',
    status: 'New',
  },
];

const appointments = [
  {
    id: 'A001',
    time: '10:00 AM',
    patient: 'Rahul Patel',
    doctor: 'Dr. Amit Shah',
    date: '2026-10-07',
    status: 'Booked',
  },
  {
    id: 'A002',
    time: '10:30 AM',
    patient: 'Priya Shah',
    doctor: 'Dr. Mehta',
    date: '2026-10-07',
    status: 'Booked',
  },
  {
    id: 'A003',
    time: '11:00 AM',
    patient: 'Amit Kumar',
    doctor: 'Dr. Amit Shah',
    date: '2026-10-07',
    status: 'Completed',
  },
];

const consultations = [
  {
    id: 'C001',
    patient: 'Amit Kumar',
    doctor: 'Dr. Amit Shah',
    date: '2026-10-07',
    bloodPressure: '118/78',
    temperature: '98.4°F',
    notes: 'Regular follow-up consultation.',
    status: 'Completed',
  },
];

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Clinic management backend is running.',
  });
});

app.get('/api/patients', (req, res) => {
  res.json(patients);
});

app.get('/api/appointments', (req, res) => {
  res.json(appointments);
});

app.post('/api/appointments', (req, res) => {
  const { patient, doctor, date, time } = req.body;

  if (!patient || !doctor || !date || !time) {
    return res.status(400).json({ message: 'All appointment fields are required.' });
  }

  const newAppointment = {
    id: `A00${appointments.length + 1}`,
    patient,
    doctor,
    date,
    time,
    status: 'Booked',
  };

  appointments.push(newAppointment);
  res.status(201).json(newAppointment);
});

app.get('/api/consultations', (req, res) => {
  res.json(consultations);
});

app.post('/api/consultations', (req, res) => {
  const { patient, doctor, bloodPressure, temperature, notes } = req.body;

  if (!patient || !doctor || !bloodPressure || !temperature || !notes) {
    return res.status(400).json({ message: 'All consultation fields are required.' });
  }

  const newConsultation = {
    id: `C00${consultations.length + 1}`,
    patient,
    doctor,
    date: '2026-10-07',
    bloodPressure,
    temperature,
    notes,
    status: 'Completed',
  };

  consultations.push(newConsultation);
  res.status(201).json(newConsultation);
});

app.listen(PORT, () => {
  console.log(`Clinic backend running on http://localhost:${PORT}`);
});
