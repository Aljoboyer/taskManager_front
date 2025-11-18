import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import Login from './pages/auth/Login';

function App() {

  return (
   <main>
     <Toaster position="top-center" />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
   </main>
  )
}

export default App
