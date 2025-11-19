import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Tasks from "../pages/dashboard/Tasks/Tasks";
import TasksOperation from "../pages/dashboard/TasksOperation/TasksOperation";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Dashboard Routes */}
      <Route
        path="/dashboard/tasks"
        element={
          <ProtectedRoute>
            <Tasks />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard/create-task"
        element={
          <ProtectedRoute>
            <TasksOperation />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
