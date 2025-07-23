import "../index.css"
import { Menu } from "lucide-react";
import samplePicture from "../assets/Cakra.png"
import avatarReplacer from "../assets/profile_picture_replacer.jpg"
import sunowlStroriesLogo from "../assets/ssplogo.jpg"
import DropdownMenu from "./DropdownMenu";
import { useSelector } from "react-redux";

export default function Header () {
    const isLogin = localStorage.getItem('token')
    const user = useSelector(state => state.globalData.user)
    const userName = user.Profile.first_name
    const userAvatar = user.avatar
    return (
        <div>
            {isLogin ? (
                <div className="grid grid-cols-3">
                    {userAvatar? (
                        <img src={samplePicture} alt="avatar" className="rounded-full size-12 justify-self-center" />
                    ): (
                        <img src={avatarReplacer} alt="avatar" className="rounded-full size-12 justify-self-center" />
                    )}
                    <p className="justify-self-center content-center font-semibold">Hi, {userName}</p>
                    <div className="content-center">
                        <DropdownMenu />
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-3">
                    <img src={sunowlStroriesLogo} alt="avatar" className="h-20 w-auto col-span-2 justify-self-start pl-6" />
                    <div className="content-center">
                        <DropdownMenu />
                    </div>
                </div>
            )}
        </div>
    );
}