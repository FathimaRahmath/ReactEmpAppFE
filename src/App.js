
import {  Routes, Route } from 'react-router-dom';
import EmpDashboard from './components/EmpDashboard';
import EmpForm from './components/EmpForm';
import Navbar from './components/Navbar';
import Index from './components/Index';


function App() {
  return (
    
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<EmpDashboard/>} />
        <Route path="/form" element={<EmpForm/>} />
      </Routes>
      </div>
    
  );
}

export default App;
