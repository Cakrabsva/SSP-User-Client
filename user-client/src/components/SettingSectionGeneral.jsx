import "../index.css"
import { ChevronRight, Mail, RectangleEllipsis, UserRoundPen } from "lucide-react"
import { Link } from 'react-router-dom';

export default function SettingSectionGeneral () {
    return (
        <div className="mt-8">
            <p className="text-lg font-semibold">
                GENERAL
            </p>
            <Link to='/change-email'>
                <div className="grid grid-cols-2 hover:bg-gray-100 duration-300 cursor-pointer w-full py-3">
                    <div className="flex space-x-4">
                        <Mail className="size-7 text-gray-700" />
                        <p className="font-semibold text-gray-700">Change Email</p>
                    </div>
                    <div className="justify-items-end">
                        <ChevronRight className="text-gray-700" />
                    </div>
                </div>
            </Link>
            <Link to='/change-username'>
                <div className="grid grid-cols-2 hover:bg-gray-100 duration-300 cursor-pointer w-full py-3">
                    <div className="flex space-x-4">
                        <UserRoundPen className="size-7 text-gray-700" />
                        <p className="font-semibold text-gray-700">Change Username</p>
                    </div>
                    <div className="justify-items-end">
                        <ChevronRight className="text-gray-700" />
                    </div>
                </div>
            </Link>
            <Link to='/change-password'>
                <div className="grid grid-cols-2 hover:bg-gray-100 duration-300 cursor-pointer w-full py-3">
                    <div className="flex space-x-4">
                        <RectangleEllipsis className="size-7 text-gray-700" />
                        <p className="font-semibold text-gray-700">Change Password</p>
                    </div>
                    <div className="justify-items-end">
                        <ChevronRight className="text-gray-700" />
                    </div>
                </div>
            </Link>
        </div>
    )
}