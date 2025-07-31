import "../index.css"
import { ChevronRight, Heart, Settings, ShieldCheck, TicketsPlane } from "lucide-react"
import { Link } from 'react-router-dom';

export default function ProfileSection3 (props) {

    const user = props.userData

    return (
        <div>
            <Link to='/edit-profile'>
                <div className="grid grid-cols-2 hover:bg-gray-100 duration-300 cursor-pointer w-full px-6 py-3">
                        <div className="flex space-x-4">
                            <Settings className="size-6 text-gray-400" />
                            <p className="font-semibold text-gray-700">Edit Profile</p>
                        </div>
                    <div className="justify-items-end">
                        <ChevronRight className="text-gray-400" />
                    </div>
                </div>
            </Link>
            <div className="grid grid-cols-2 hover:bg-gray-100 duration-300 cursor-pointer w-full px-6 py-3">
                <div className="flex space-x-4">
                    <Heart className="size-6 text-gray-400" />
                    <p className="font-semibold text-gray-700">Whistlist</p>
                </div>
                <div className="justify-items-end">
                    <ChevronRight className="text-gray-400" />
                </div>
            </div>
            <div className="grid grid-cols-2 hover:bg-gray-100 duration-300 cursor-pointer w-full px-6 py-3">
                <div className="flex space-x-4">
                    <TicketsPlane className="size-6 text-gray-400" />
                    <p className="font-semibold text-gray-700">Previous Trip</p>
                </div>
                <div className="justify-items-end">
                    <ChevronRight className="text-gray-400" />
                </div>
            </div>
            <Link to='/verify-account' className="grid grid-cols-2 hover:bg-gray-100 duration-300 cursor-pointer w-full px-6 py-3">
                <div className="flex space-x-4">
                    <ShieldCheck className="size-6 text-gray-400" />
                    <p className="font-semibold text-gray-700">Verify Account {!user.is_verified? <span className="font-bold size-10 text-yellow-400">!</span> :<></>}</p>
                </div>
                <div className="justify-items-end">
                    <ChevronRight className="text-gray-400" />
                </div>
            </Link>
        </div>
    )
}