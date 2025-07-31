import "../index.css"
import { Link } from 'react-router-dom';
import { MessageCircleMore, StoreIcon, HomeIcon, User, TentTreeIcon, Plane} from "lucide-react"

export default function Navbar (props) {

    const activePage = props.data.active

    return (
        <div className="flex justify-center">
            <div className="h-24 bg-gray-100 grid grid-cols-5 justify-items-center content-center fixed bottom-8 rounded-4xl shadow-lg w-96">
                {activePage === 'Trip' ? 
                    <div className="bg-yellow-300 size-14 flex justify-center items-center rounded-full shadow-md hover:scale-110 duration-200"> 
                        <Link to="/trip"><Plane className="size-8 text-gray-600" /></Link>
                    </div>:
                    <div className="flex justify-center items-center hover:scale-110 duration-200">
                        <Link to="/trip" className="font-semibold text-gray-600">
                            <Plane className="size-7 text-gray-500 justify-self-center" />
                            Trip
                        </Link>
                    </div>
                }
                {activePage === 'Store' ? 
                    <div className="bg-yellow-300 size-14 flex justify-center items-center rounded-full shadow-md hover:scale-110 duration-200"> 
                        <Link to="/store"><StoreIcon className="size-8 text-gray-600" /></Link>
                    </div>:
                    <div className="flex justify-center items-center hover:scale-110 duration-200">
                        <Link to="/store" className="font-semibold text-gray-600">
                            <StoreIcon className="size-7 text-gray-500 justify-self-center" />
                            Store
                        </Link>
                    </div>
                }
                {activePage === 'Home' ? 
                    <div className="bg-yellow-300 size-14 flex justify-center items-center rounded-full shadow-md hover:scale-110 duration-200"> 
                        <Link to="/"><HomeIcon className="size-8 text-gray-600" /></Link>
                    </div>:
                    <div className="flex justify-center items-center hover:scale-110 duration-200">
                        <Link to="/" className="font-semibold text-gray-600">
                            <HomeIcon className="size-7 text-gray-500 justify-self-center" />
                            Home
                        </Link>
                    </div>
                }
                {activePage === 'Message' ? 
                    <div className="bg-yellow-300 size-14 flex justify-center items-center rounded-full shadow-md hover:scale-110 duration-200"> 
                        <Link to="/message"><MessageCircleMore className="size-8 text-gray-600" /></Link>
                    </div>:
                    <div className="flex justify-center items-center hover:scale-110 duration-200">
                        <Link to="/message" className="font-semibold text-gray-600">
                            <MessageCircleMore className="size-7 text-gray-500 justify-self-center" />
                            Message
                        </Link>
                    </div>
                }
                {activePage === 'Profile' ? 
                    <div className="bg-yellow-300 size-14 flex justify-center items-center rounded-full shadow-md hover:scale-110 duration-200"> 
                        <Link to="/"><User className="size-8 text-gray-600" /></Link>
                    </div>:
                    <div className="flex justify-center items-center hover:scale-110 duration-200">
                        <Link to="/profile" className={`font-semibold text-gray-600`}>
                            <User className="size-7 justify-self-center" />
                            Profile
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}
