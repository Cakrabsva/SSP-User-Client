import "../index.css"
import Swal from 'sweetalert2';
import { User, Mail, KeyRound, RotateCcwKey, CircleArrowLeft, EyeOff, Eye } from "lucide-react"
import { Link, useNavigate } from 'react-router-dom';
import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onRegister } from "../features/dispatch-function/authSlices";
import Loading from "../components/Loading";

export default function Register () {

    const [form, setform] = useState({username:'', email:'', password:''})
    const [confirmPassword, setConfirmPassword] = useState('')
    const [eyePass, setEyePass] =useState(false)
    const [eyeConfirmPass, setEyeConfirmPass] =useState(false)
    const isLoading = useSelector(state => state.auth.loading);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChangeForm = (e) => {
        const {name, value} = e.target
        setform((prev)=>({...prev, [name]:value.replace(/\s/g, '')}))
    }

    const handleChangeConfirmPassword = (e) => { 
        setConfirmPassword(e.target.value.replace(/\s/g, ''))
    }
    
    const handleOnRegister = async (e) => {
        e.preventDefault()
        if(form.password !== confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password Mismatch!",
                confirmButtonText: 'Oke',
            })
            return
        }
        dispatch(onRegister({form, navigate}))
        setConfirmPassword('')
        setform(()=>({username:'', email:'', password:''}))
    }

     if(isLoading) {
            return (
                <Loading />
            )
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
                    <Link to='/login'>
                        <p className="text-xl font-bold hover:scale-105 transition-all duration-300">
                        Login</p>
                    </Link>
                </div>
                <div className="mt-12 space-y-3">
                    <p className="text-4xl font-bold">Register</p>
                    <p className="font-semibold">Jika kamu belum memiliki akun silahkan register dulu ya.</p>
                </div>
            </div>
            <div className="bg-white py-16 px-6 rounded-t-[48px] absolute bottom-0 inset-x-0">
                <form 
                    action=""
                    onSubmit={handleOnRegister}
                    className="space-y-3 font-sans text-justify">
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input 
                            type="text"
                            placeholder="Username"
                            id="username"
                            name="username"
                            value={form.username}
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
                            <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input 
                            type="email"
                            placeholder="Email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChangeForm}
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
                            type= {!eyePass ? 'password' : 'text'}
                            placeholder="Password"
                            id="password"
                            name="password"
                            value={form.password}
                            onChange={handleChangeForm}
                            onKeyDown={(e) => {
                                if (e.key === ' ') e.preventDefault();
                            }}
                            autoComplete="off"
                            required
                            className="border border-gray-300 rounded-full bg-gray-100 w-full h-10 px-5 py-8 pl-10 text-gray-600"
                        />
                        <a onMouseDown={() => setEyePass(!eyePass)} onMouseLeave={() => setEyePass(false)} className="absolute inset-y-0 right-0 pr-5 flex items-center cursor-pointer">
                            {!eyePass ? <EyeOff className="text-gray-400 size-5"/> : <Eye className="text-gray-400 size-5"/>}
                        </a>
                    </div>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <RotateCcwKey className="h-5 w-5 text-gray-400" />
                        </div>
                        <input 
                            type={!eyeConfirmPass ? 'password' : 'text'}
                            placeholder="Confirm Password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={handleChangeConfirmPassword}
                            onKeyDown={(e) => {
                                if (e.key === ' ') e.preventDefault();
                            }}
                            autoComplete="off"
                            required
                            className="border border-gray-300 rounded-full bg-gray-100 w-full h-10 px-5 py-8 pl-10 text-gray-600"
                        />
                        <a onMouseDown={() => setEyeConfirmPass(!eyeConfirmPass)} onMouseLeave={() => setEyeConfirmPass(false)} className="absolute inset-y-0 right-0 pr-5 flex items-center cursor-pointer">
                            {!eyeConfirmPass ? <EyeOff className="text-gray-400 size-5"/> : <Eye className="text-gray-400 size-5"/>}
                        </a>
                        
                    </div>
                    <button type="submit" className="w-full text-center bg-black text-white font-bold px-12 py-4 rounded-full hover:scale-105 transition-all duration-300 mt-8 cursor-pointer">
                        Register</button>
                </form>
            </div>
        </div>
    )
}