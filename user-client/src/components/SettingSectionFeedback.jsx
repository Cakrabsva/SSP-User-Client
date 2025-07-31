import "../index.css"
import { ChevronRight, Headset, Mail, RectangleEllipsis, Send, TriangleAlert, UserRoundPen } from "lucide-react"
import { Link } from 'react-router-dom';

export default function SettingSectionFeedback () {
    return (
        <div className="mt-8">
            <div>
                <p className="mt-8 text-lg font-semibold">
                    FEEDBACK
                </p>
                <div className="grid grid-cols-2 hover:bg-gray-100 duration-300 cursor-pointer w-full py-3">
                    <div className="flex space-x-4">
                        <TriangleAlert className="size-7 text-gray-700" />
                        <p className="font-semibold text-gray-700">Report bug</p>
                    </div>
                    <div className="justify-items-end">
                        <ChevronRight className="text-gray-700" />
                    </div>
                </div>
                <div className="grid grid-cols-2 hover:bg-gray-100 duration-300 cursor-pointer w-full py-3">
                    <div className="flex space-x-4">
                        <Send className="size-7 text-gray-700" />
                        <p className="font-semibold text-gray-700">Send feedback</p>
                    </div>
                    <div className="justify-items-end">
                        <ChevronRight className="text-gray-700" />
                    </div>
                </div>
                <div className="grid grid-cols-2 hover:bg-gray-100 duration-300 cursor-pointer w-full py-3">
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