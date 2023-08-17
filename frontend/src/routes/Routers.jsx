import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Tracker from "../components/Tracker/Tracker";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tracker" element={<Tracker />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile/:id" element={<Profile />} />
    </Routes>
  );
}

export default Routers;
