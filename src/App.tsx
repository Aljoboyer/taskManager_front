import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Tasks from './pages/dashboard/Tasks/Tasks';
import TasksOperation from './pages/dashboard/TasksOperation/TasksOperation';
import AppRoutes from './routes/routes';

function App() {

  return (
   <main>
     <Toaster position="top-center" />
        <Router>
          <AppRoutes />
        </Router>
   </main>
  )
}

export default App
