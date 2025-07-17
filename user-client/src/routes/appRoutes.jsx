import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import LoginRegister from "../pages/LoginRegister"
import Register from "../pages/Register"
import Login from "../pages/Login"
import Settings from "../pages/Settings"

const appRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login-register" element={<LoginRegister />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/settings" element={<Settings/>} />
        </Routes>
    )
}

export default appRoutes