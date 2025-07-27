import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import LoginRegister from "../pages/LoginRegister"
import Register from "../pages/Register"
import Login from "../pages/Login"
import Settings from "../pages/Settings"
import ChangeEmail from "../pages/ChangeEmail"
import ChangeUsername from "../pages/ChangeUsername"
import ChangePassword from "../pages/ChangePassword"
import ForgotPassword from "../pages/ForgotPassword"
import ResetPassword from "../pages/ResetPassword"
import Profile from "../pages/Profile"
import EditProfile from "../pages/EditProfile"

const appRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login-register" element={<LoginRegister />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/change-email" element={<ChangeEmail/>} />
            <Route path="/change-username" element={<ChangeUsername/>} />
            <Route path="/change-password" element={<ChangePassword/>} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
            <Route path="/reset-password/:id" element={<ResetPassword/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/edit-profile" element={<EditProfile/>} />

        </Routes>
    )
}

export default appRoutes