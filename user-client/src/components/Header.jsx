import "../index.css"
import avatarReplacer from "../assets/profile_picture_replacer.jpg"
import sunowlStroriesLogo from "../assets/ssplogo.jpg"
import DropdownMenu from "./DropdownMenu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGlobalData } from "../features/global-data/globalData";

export default function Header () {
    const isLogin = localStorage.getItem('token')
    let {user, isLoading} = useSelector(state => state.globalData)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isLogin) {
            dispatch(fetchGlobalData());
        }
    }, [dispatch, isLogin]);

    let userName = 'Loading...'
    let userAvatar = avatarReplacer

    if(!isLoading) {
        userName = user.Profile.first_name
        if (user.Profile.avatar) {
            userAvatar = user.Profile.avatar
        }
    }

    return (
        <div>
            {isLogin ? (
                <div className="grid grid-cols-3">
                    <img src={userAvatar} alt="avatar" className="rounded-full size-12 justify-self-center" />
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