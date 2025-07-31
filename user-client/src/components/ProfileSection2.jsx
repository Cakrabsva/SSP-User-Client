import "../index.css"
import { Award } from "lucide-react";

export default function ProfileSection2 () {
    return (
        <div className="grid grid-cols-3 justify-center mb-12">
            <div className="text-center space-y-2">
                <p className="font-semibold">Travels</p>
                <p className="font-bold text-lg text-blue-500">100</p>
            </div>
            <div className="text-center space-y-2">
                <p className="font-semibold">Reward Points</p>
                <p className="font-bold text-lg text-blue-500">100</p>
            </div>
            <div className="text-center space-y-2">
                <p className="font-semibold">Badges</p>
                <Award className="justify-self-center text-yellow-600 size-7" />
            </div>
        </div>
    )
}