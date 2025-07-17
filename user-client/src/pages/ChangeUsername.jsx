import "../index.css"
import { CircleArrowLeft, KeyRound, UserRoundPen } from "lucide-react"
import { Link } from 'react-router-dom';

export default function ChangeUsername () {
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
                        action=""
                        className="space-y-3 font-sans text-justify">
                        
                        <div className="relative w-full mt-10">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <UserRoundPen className="h-5 w-5 text-gray-400" />
                            </div>
                            <input 
                                type="text"
                                placeholder="New Username"
                                className="border border-gray-300 rounded-full bg-gray-100 w-full h-10 px-5 py-8 pl-10 text-gray-600"
                            />
                        </div>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <KeyRound className="h-5 w-5 text-gray-400" />
                            </div>
                            <input 
                                type="text"
                                placeholder="Password"
                                className="border border-gray-300 rounded-full bg-gray-100 w-full h-10 px-5 py-8 pl-10 text-gray-600"
                            />
                        </div>
                        <button 
                            href=""
                            className="w-full text-center bg-yellow-400 font-bold px-12 py-4 rounded-full hover:scale-105 transition-all duration-300 mt-8 cursor-pointer">
                            Confirm
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}