import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

import TaskForm from "../pages/TaskForm";
import Signup from "../pages/Signup";

function Routers() {
  const user = false;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/newtask" element={<TaskForm />} />
    </Routes>
  );
}
export default Routers;
