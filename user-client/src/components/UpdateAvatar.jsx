import "../index.css"
import { ChevronLeft, Loader2 } from "lucide-react"
import { Link, useNavigate } from 'react-router-dom';
import avatarReplacer from "../assets/profile_picture_replacer.jpg"
import { useDispatch} from "react-redux";
import { useRef, useState } from "react";
import { onUpdateAvatar } from "../features/dispatch-function/profileSlices";

export default function UpdateAvatar (props) {
    
    const avatarUrl = props.userData.Profile.avatar
    const [url, setUrl] = useState(avatarUrl)
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const fileInputRef = useRef(null);
    const navigate = useNavigate()


    const handleClickChangeAvatar = (() => {
        fileInputRef.current.click();
    })

    const handleFileChange = (async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('avatar', file)
        setLoading(true)
        const res = await dispatch(onUpdateAvatar({formData, navigate}))
        setUrl(res.payload.url)
        setLoading(false)
    })
    return (
        <div>
            <div className="grid grid-cols-3 mb-6">
                <Link to="/profile">
                    <ChevronLeft/>
                </Link>
                <p className="font-bold text-lg justify-self-center">
                    Edit Profile
                </p>
            </div>

            <div className="mb-12">
                <div className="justify-items-center">
                    {loading ? (
                        <div className="size-27 flex justify-center items-center">
                            <Loader2 className="animate-spin w-12 h-12 text-blue-300" />
                        </div>
                    ) : (
                        avatarUrl ? 
                            <img src={url} alt="avatar" className="rounded-full size-24 justify-self-center mb-3" /> 
                            : 
                            <img src={avatarReplacer} alt="avatar" className="rounded-full size-24 justify-self-center mb-3" />
                    )}
                </div>
                <div className="text-blue-700 font-semibold hover:text-blue-400 cursor-pointer text-center">
                    <a onClick={handleClickChangeAvatar}>Change profile avatar</a>
                </div>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                    accept="image/*"
                />
            </div>
        </div>
    )
}