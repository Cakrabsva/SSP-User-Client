import "../index.css"
import { Menu } from "lucide-react";
import samplePicture from "../assets/Cakra.png"
import DropdownMenu from "./DropdownMenu";

export default function Header () {
    return (
        <div className="grid grid-cols-3">
            <img src={samplePicture} alt="avatar" className="rounded-full size-12 justify-self-center" />
            <p className="justify-self-center content-center font-semibold">Hi, Cakra Bilisairo</p>
            <div className="content-center">
                <DropdownMenu />
            </div>
        </div>
    )
}