import "../index.css"
import { Menu } from "lucide-react";
import samplePicture from "../assets/Cakra.png"

export default function Header () {
    return (
        <div className="grid grid-cols-3">
            <img src={samplePicture} alt="avatar" className="rounded-full size-12 justify-self-center" />
            <p className="justify-self-center content-center">Hi, Cakra Bilisairo</p>
            <div className="content-center">
                <Menu className="size-8 text-gray-500 justify-self-center" />
            </div>
        </div>
    )
}