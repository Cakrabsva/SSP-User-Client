import { useDispatch } from "react-redux";
import "../index.css"
import { Link, useNavigate } from 'react-router-dom';
import { onVerifyUser } from "../features/dispatch-function/userSlices";

export default function VerifyEmail () {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleOnVerifyEmail = () => {
        dispatch(onVerifyUser(navigate))
    }

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="text-center space-y-8">
                <p>Thank You for verify your email. plese hit confirm to continue!</p>
                <Link to='/' onClick={handleOnVerifyEmail} className="bg-yellow-500 py-2 px-6 rounded-xl">Confirm</Link>
            </div>
        </div>
    )
}