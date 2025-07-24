import "../index.css"
import { CircleArrowLeft, Eye, EyeOff, KeyRound, RectangleEllipsis} from "lucide-react"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { onResetPassword } from "../features/dispatch-function/passwordSlices";
import Loading from "../components/Loading";

export default function ResetPassword () {

    const [form, setForm] = useState({newPassword:'',  confirmPassword:''})
    const [eyeNewPass, setEyeNewPass] = useState(false)
    const [eyeConfirmPass, setEyeConfirmPass] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLoading = useSelector(state => state.password.loading);
    const params = useParams()
    const id = params.id

    const handleOnChangeForm = (e) => {
        const {name, value} = e.target
        setForm((prev)=>({...prev, [name]:value.replace(/\s/g, '')}))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(onResetPassword({form, id, navigate}))
        setForm({newPassword:'',  confirmPassword:''})
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
                    <CircleArrowLeft className="size-10 text-black hover:scale-105 transition-all duration-300 cursor-pointer" />
                </Link>
                <div className="justify-center mt-16 space-y-6">
                    <p className="text-2xl text-center font-bold">Reset Password</p>
                    <p className="text-gray-400 text-center font-semibold">Enter your new password and type password again to confirm changes</p>
                </div>
                <div>
                    <form
                        onSubmit={handleOnSubmit} 
                        action=""
                        className="space-y-3 font-sans text-justify">
    
                        <div className="relative w-full mt-10">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <KeyRound className="h-5 w-5 text-gray-400" />
                            </div>
                            <input 
                                type={!eyeNewPass ? 'password' : 'text'}
                                id="newPassword"
                                name="newPassword"
                                value={form.newPassword}
                                onChange={handleOnChangeForm}
                                onKeyDown={(e) => {
                                    if (e.key === ' ') e.preventDefault();
                                }}
                                placeholder="New Password"
                                required
                                autoComplete="off"
                                className="border border-gray-300 rounded-full bg-gray-100 w-full h-10 px-5 py-8 pl-10 text-gray-600"
                            />
                            <a onMouseDown={() => setEyeNewPass(!eyeNewPass)} onMouseLeave={() => setEyeNewPass(false)} className="absolute inset-y-0 right-0 pr-5 flex items-center cursor-pointer">
                                {!eyeNewPass ? <EyeOff className="text-gray-400 size-5"/> : <Eye className="text-gray-400 size-5"/>}
                            </a>
                        </div>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <RectangleEllipsis className="h-5 w-5 text-gray-400" />
                            </div>
                            <input 
                                type={!eyeConfirmPass ? 'password' : 'text'}
                                id="confirmPassword"
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleOnChangeForm}
                                onKeyDown={(e) => {
                                    if (e.key === ' ') e.preventDefault();
                                }}
                                placeholder="Confirm Password"
                                required
                                autoComplete="off"
                                className="border border-gray-300 rounded-full bg-gray-100 w-full h-10 px-5 py-8 pl-10 text-gray-600"
                            />
                            <a onMouseDown={() => setEyeConfirmPass(!eyeConfirmPass)} onMouseLeave={() => setEyeConfirmPass(false)} className="absolute inset-y-0 right-0 pr-5 flex items-center cursor-pointer">
                                {!eyeConfirmPass ? <EyeOff className="text-gray-400 size-5"/> : <Eye className="text-gray-400 size-5"/>}
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