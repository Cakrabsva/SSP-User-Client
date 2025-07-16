import { User, KeyRound, CircleArrowLeft } from "lucide-react"
import { Link } from 'react-router-dom';
import "../index.css"

export default function Login () {
    return (
        <div className="
            max-w-[411px] min-w-[375px] h-screen py-8
            border border-gray-200 rounded-4xl shadow-lg
            mx-auto 
            bg-yellow-400
            relative">
            <div className="px-6">
                <div className="flex justify-between items-center">
                    <Link to='/'>
                        <CircleArrowLeft className="size-11 text-black hover:scale-105 transition-all duration-300" />
                    </Link>
                    <Link to='/register'>
                        <p  
                            href=""
                            className="text-xl font-bold hover:scale-105 transition-all duration-300">
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
                    action=""
                    className="space-y-3 font-sans text-justify">
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input 
                            type="text"
                            placeholder="Username"
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
                        className="w-full text-center bg-black text-white font-bold px-12 py-4 rounded-full hover:scale-105 transition-all duration-300 mt-8 cursor-pointer">
                    Login</button>
                </form>
            </div>
        </div>
    )
}