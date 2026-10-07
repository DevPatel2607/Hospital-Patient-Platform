import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Appointments from "./pages/Appointments";
import Consultation from "./pages/Consultation";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/patients" element={<Patients />} />

        <Route path="/appointments" element={<Appointments />} />

        <Route path="/consultations" element={<Consultation />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;