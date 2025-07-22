import "../index.css"
import { CircleArrowLeft, Eye, EyeOff, KeyRound, UserRoundPen } from "lucide-react"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { onUpdateUsername } from "../features/dispatch-function/userSlice";

export default function ChangeUsername () {

    const [form, setForm] = useState({newUsername:'', password:''})
    const [eye, setEye] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleOnChangeForm = (e) => {
        const {name, value} = e.target
        setForm((prev)=>({...prev, [name]:value.replace(/\s/g, '')}))
    }

    const handleOnSubmitForm = async (e) => {
        e.preventDefault()
        const response = await dispatch(onUpdateUsername(form))
        if(response) {
            navigate('/settings')
        }
        setForm({newUsername:'', password:''})
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
                    <p className="text-2xl text-center font-bold">Change Username</p>
                    <p className="text-gray-400 text-center font-semibold">Enter your new username and password to confirm changes</p>
                </div>
                <div>
                    <form
                        onSubmit={handleOnSubmitForm} 
                        action=""
                        className="space-y-3 font-sans text-justify">
                        
                        <div className="relative w-full mt-10">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <UserRoundPen className="h-5 w-5 text-gray-400" />
                            </div>
                            <input 
                                type="text"
                                id="newUSername"
                                name="newUsername"
                                value={form.newUsername}
                                onChange={handleOnChangeForm}
                                placeholder="New Username"
                                onKeyDown={(e) => {
                                    if (e.key === ' ') e.preventDefault();
                                }}
                                required
                                autoComplete="off"
                                className="border border-gray-300 rounded-full bg-gray-100 w-full h-10 px-5 py-8 pl-10 text-gray-600"
                            />
                        </div>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <KeyRound className="h-5 w-5 text-gray-400" />
                            </div>
                            <input 
                                type={!eye ? "password" : "text"}
                                id="password"
                                name="password"
                                value={form.password}
                                onChange={handleOnChangeForm}
                                placeholder="Password"
                                onKeyDown={(e) => {
                                    if (e.key === ' ') e.preventDefault();
                                }}
                                required
                                autoComplete="off"
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