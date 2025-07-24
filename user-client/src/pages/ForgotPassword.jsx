import "../index.css"
import { CircleArrowLeft, Mail } from "lucide-react"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { onForgotPassword } from "../features/dispatch-function/passwordSlices";
import Loading from "../components/Loading";

export default function ForgotPassword () {

    const [email, setEmail] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLoading = useSelector(state => state.password.loading);

    const handleOnChangeEmail = (e) => {
        setEmail(e.target.value.replace(/\s/g, ''))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(onForgotPassword({email, navigate}))
        setEmail('')
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
            bg-white
            relative">
            
            <div className="px-6">
                <Link to='/settings'>
                    <CircleArrowLeft className="size-10 text-black hover:scale-105 transition-all duration-300 cursor-pointer" />
                </Link>
                <div className="justify-center mt-16 space-y-6">
                    <p className="text-2xl text-center font-bold">Forgot Password</p>
                    <p className="text-gray-400 text-center font-semibold">Enter your Email account to reset your password</p>
                </div>
                <div>
                    <form
                        onSubmit={handleOnSubmit} 
                        action=""
                        className="space-y-3 font-sans text-justify">
                        
                        <div className="relative w-full mt-10">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input 
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleOnChangeEmail}
                                placeholder="Email"
                                onKeyDown={(e) => {
                                    if (e.key === ' ') e.preventDefault();
                                }}
                                    autoComplete="off"
                                    required
                                className="border border-gray-300 rounded-full bg-gray-100 w-full h-10 px-5 py-8 pl-10 text-gray-600"
                            />
                        </div>
                        <button
                            type="submit" 
                            className="w-full text-center bg-yellow-400 font-bold px-12 py-4 rounded-full hover:scale-105 transition-all duration-300 mt-8 cursor-pointer">
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}