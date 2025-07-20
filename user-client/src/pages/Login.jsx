import "../index.css"
import { User, KeyRound, CircleArrowLeft, Eye, EyeOff } from "lucide-react"
import { Link, useNavigate} from 'react-router-dom';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { onLogin } from "../features/dispatch-function/userSlice";

export default function Login () {

    const [form, setForm] = useState({emailUsername:'', password:''})
    const [eye, setEye] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChangeForm = (e) => {
        const {name, value} = e.target
        setForm((prev)=>({...prev, [name]: value.replace(/\s/g, '')}))
    }
    
    const handleOnLogin = async (e) => {
        e.preventDefault()
        const response = await dispatch(onLogin(form))
        if(response) {
            navigate('/')
        }
        setForm({emailUsername:'', password:''})
    }

    return (
        <div className="
            max-w-[411px] min-w-[375px] h-screen py-8
            border border-gray-200 rounded-4xl shadow-lg
            mx-auto 
            bg-yellow-400
            relative">
            <div className="px-6">
                <div className="flex justify-between items-center">
                    <Link to='/login-register'>
                        <CircleArrowLeft className="size-11 text-black hover:scale-105 transition-all duration-300" />
                    </Link>
                    <Link to='/register'>
                        <p className="text-xl font-bold hover:scale-105 transition-all duration-300">
                        Register</p>
                    </Link>
                </div>
                <div className="mt-12 space-y-3">
                    <p className="text-4xl font-bold">Login</p>
                    <p className="font-semibold">Silahkan login dulu kawan supaya kamu bisa menikmati semua fitur di aplikasi ini.</p>
                </div>
            </div>
            <div className="bg-white py-16 px-6 rounded-t-[48px] absolute bottom-0 inset-x-0">
                <form
                    onSubmit={handleOnLogin} 
                    action=""
                    className="space-y-3 font-sans text-justify">
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input 
                            type="text"
                            id="emailUsername"
                            name="emailUsername"
                            placeholder="Email or Username"
                            value={form.emailUsername}
                            onChange={handleChangeForm}
                            onKeyDown={(e) => {
                                if (e.key === ' ') e.preventDefault();
                            }}
                            autoComplete="off"
                            required
                            className="border border-gray-300 rounded-full bg-gray-100 w-full h-10 px-5 py-8 pl-10 text-gray-600"
                        />
                    </div>

                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <KeyRound className="h-5 w-5 text-gray-400" />
                        </div>
                        <input 
                            type={!eye ? 'password' : 'text'}
                            id="password"
                            name="password"
                            value={form.password}
                            placeholder="Password"
                            onChange={handleChangeForm}
                            onKeyDown={(e) => {
                                if (e.key === ' ') e.preventDefault();
                            }}
                            autoComplete="off"
                            required
                            className="border border-gray-300 rounded-full bg-gray-100 w-full h-10 px-5 py-8 pl-10 text-gray-600"
                        />
                        <a onMouseDown={() => setEye(!eye)} onMouseLeave={() => setEye(false)} className="absolute inset-y-0 right-0 pr-5 flex items-center cursor-pointer">
                            {!eye ? <EyeOff className="text-gray-400 size-5"/> : <Eye className="text-gray-400 size-5"/>}
                        </a>
                    </div>
                    <div className="flex justify-end">
                        <Link className="font-semibold hover:scale-105 hover:text-red-700 duration-300" to='/forgot-password'>Forgot Password?</Link>
                    </div>
                    <button type="submit" className="w-full text-center bg-black text-white font-bold px-12 py-4 rounded-full hover:scale-105 transition-all duration-300 mt-8 cursor-pointer">
                    Login</button>
                </form>
            </div>
        </div>
    )
}