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
import VerifyEmail from "../pages/VerifyEmail"
import VerifyAccount from "../pages/VerifyAccount"
import TripList from "../pages/TripList"
import Store from "../pages/Store"
import Message from "../pages/Message"
import TripDetail from "../pages/TripDetail"

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
            <Route path="/verify-account" element={<VerifyAccount/>} />
            <Route path="/verify-email/:id" element={<VerifyEmail/>} />
            <Route path="/trip-list" element={<TripList/>} />
            <Route path="/store" element={<Store/>} />
            <Route path="/message" element={<Message/>} />
            <Route path="/trip-detail/:id" element={<TripDetail/>} />
        </Routes>
    )
}

export default appRoutes