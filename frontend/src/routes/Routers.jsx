import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Tracker from "../components/Tracker/Tracker";
import TaskForm from "../pages/TaskForm";
import Signup from "../pages/Signup";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tracker" element={<Tracker />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/newtask" element={<TaskForm />} />
    </Routes>
  );
}

export default Routers;
