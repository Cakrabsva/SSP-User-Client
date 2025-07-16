import "../index.css"
import { Link } from 'react-router-dom';
import { MessageCircleMore, StoreIcon, HomeIcon, User, TentTreeIcon} from "lucide-react"

export default function Navbar () {
    return (
        <div className="h-24 bg-gray-100 grid grid-cols-5 justify-items-center content-center inset-x-0 rounded-4xl shadow-lg">
            <div className="flex justify-center items-center hover:scale-120 duration-200">
                <Link to="" className="font-semibold text-gray-600">
                    <TentTreeIcon className="size-6 text-gray-500 justify-self-center" />
                    My Trip
                </Link>
            </div>
            <div className="flex justify-center items-center hover:scale-120 duration-200">
                <Link to="" className="font-semibold text-gray-600">
                    <StoreIcon className="size-6 text-gray-500 justify-self-center" />
                    Store
                </Link>
            </div>

            <div className="bg-yellow-300 size-14 flex justify-center items-center rounded-full shadow-md hover:scale-120 duration-200"> 
                <Link to=""><HomeIcon className="size-8 text-gray-600" /></Link>
            </div>
            <div className="flex justify-center items-center hover:scale-120 duration-200">
                <Link to="" className="font-semibold text-gray-600">
                    <MessageCircleMore className="size-6 text-gray-500 justify-self-center" />
                    Message
                </Link>
            </div>
            <div className="flex justify-center items-center hover:scale-120 duration-200">
                <Link to="" className="font-semibold text-gray-600">
                    <User className="size-6 text-gray-500 justify-self-center" />
                    Profile
                </Link>
            </div>
        </div>
    )
}
