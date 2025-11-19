import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Tasks from './pages/dashboard/Tasks/Tasks';

function App() {

  return (
   <main>
     <Toaster position="top-center" />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/tasks" element={<Tasks />} />
        </Routes>
      </Router>
   </main>
  )
}

export default App
