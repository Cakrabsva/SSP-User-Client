import "../index.css"
import { ChevronLeft, CircleArrowLeft, Eye, EyeOff, KeyRound, Mail, RotateCcwKey, User } from "lucide-react"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { onUpdateEmail } from "../features/dispatch-function/userSlices";
import Loading from "../components/Loading";

export default function ChangeEmail () {

    const [form, setForm] = useState({email:'', password:''})
    const [eye, setEye] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLoading = useSelector(state => state.user.loading);

    const handleOnChangeForm = (e) => {
        const {name, value} = e.target
        setForm((prev)=>({...prev, [name]: value.replace(/\s/g, '')}))
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        const response = await dispatch(onUpdateEmail({form, navigate}))
        if(response) {
            setForm({email:'', password:''})
            return
        } else {
            setForm({email:form.email, password:''})
        }
    }

    if(isLoading) {
            return (
                <Loading />
            )
        }

    return (
        <div className="pt-8">
            <div className="px-6">
                <Link to='/settings'>
                    <ChevronLeft className="text-black hover:scale-105 transition-all duration-300 cursor-pointer" />
                </Link>
                <div className="justify-center mt-16 space-y-6">
                    <p className="text-2xl text-center font-bold">Change Email</p>
                    <p className="text-gray-400 text-center font-semibold">Enter your new email and password to confirm changes</p>
                </div>
                <div>
                    <form 
                        action=""
                        onSubmit={handleOnSubmit}
                        className="space-y-3 font-sans text-justify">
                        
                        <div className="relative w-full mt-10">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input 
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleOnChangeForm}
                                onKeyDown={(e) => {
                                    if (e.key === ' ') e.preventDefault();
                                }}
                                autoComplete="off"
                                required
                                placeholder="New Email"
                                className="border border-gray-300 rounded-full bg-gray-100 w-full h-10 px-5 py-8 pl-10 text-gray-600"
                            />
                        </div>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <KeyRound className="h-5 w-5 text-gray-400" />
                            </div>
                            <input 
                                type={eye ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={form.password}
                                onChange={handleOnChangeForm}
                                onKeyDown={(e) => {
                                    if (e.key === ' ') e.preventDefault();
                                }}
                                autoComplete="off"
                                required
                                placeholder="Password"
                                className="border border-gray-300 rounded-full bg-gray-100 w-full h-10 px-5 py-8 pl-10 text-gray-600"
                            />
                            <a onMouseDown={() => setEye(!eye)} onMouseLeave={() => setEye(false)} className="absolute inset-y-0 right-0 pr-5 flex items-center cursor-pointer">
                                {!eye ? <EyeOff className="text-gray-400 size-5"/> : <Eye className="text-gray-400 size-5"/>}
                            </a>
                        </div>
                        <button 
                            type="submit"
                            className="w-full text-center bg-yellow-400 font-bold px-12 py-4 rounded-full hover:scale-105 transition-all duration-300 mt-8 cursor-pointer">
                            Confirm
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}