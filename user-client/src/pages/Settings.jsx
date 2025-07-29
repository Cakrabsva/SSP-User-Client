import { ChevronLeft, ChevronRight, CircleArrowLeft, Headset, Mail, RectangleEllipsis, Send, TriangleAlert, UserRound, UserRoundPen } from "lucide-react";
import "../index.css"
import { Link } from 'react-router-dom';

export default function Settings () {
    return (
        <div className="pt-8">
            <div className="px-6">
                <Link to='/'>
                    <ChevronLeft className="text-black hover:scale-105 transition-all duration-300 cursor-pointer" />
                </Link>
                <p className="mt-8 text-xl font-bold">
                    Settings
                </p>
                <p className="mt-8 text-lg font-semibold">
                    GENERAL
                </p>
            </div>
            <div>
                <Link to='/change-email'>
                    <div className="grid grid-cols-2 hover:bg-gray-100 duration-300 cursor-pointer w-full px-6 py-3">
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
                    <div className="grid grid-cols-2 hover:bg-gray-100 duration-300 cursor-pointer w-full px-6 py-3">
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
                    <div className="grid grid-cols-2 hover:bg-gray-100 duration-300 cursor-pointer w-full px-6 py-3">
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
            <div className="px-6">
                <p className="mt-8 text-lg font-semibold">
                    FEEDBACK
                </p>
            </div>
            <div>
                <div className="grid grid-cols-2 hover:bg-gray-100 duration-300 cursor-pointer w-full px-6 py-3">
                    <div className="flex space-x-4">
                        <TriangleAlert className="size-7 text-gray-700" />
                        <p className="font-semibold text-gray-700">Report bug</p>
                    </div>
                    <div className="justify-items-end">
                        <ChevronRight className="text-gray-700" />
                    </div>
                </div>
                <div className="grid grid-cols-2 hover:bg-gray-100 duration-300 cursor-pointer w-full px-6 py-3">
                    <div className="flex space-x-4">
                        <Send className="size-7 text-gray-700" />
                        <p className="font-semibold text-gray-700">Send feedback</p>
                    </div>
                    <div className="justify-items-end">
                        <ChevronRight className="text-gray-700" />
                    </div>
                </div>
                <div className="grid grid-cols-2 hover:bg-gray-100 duration-300 cursor-pointer w-full px-6 py-3">
                    <div className="flex space-x-4">
                        <Headset className="size-7 text-gray-700" />
                        <p className="font-semibold text-gray-700">Contact Us</p>
                    </div>
                    <div className="justify-items-end">
                        <ChevronRight className="text-gray-700" />
                    </div>
                </div>
                <div className="flex justify-center mt-20">
                    <p className="text-gray-400">Version: beta 1.0.0.0</p>
                </div>
            </div>
        </div>
    )
}