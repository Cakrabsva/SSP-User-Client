import "../index.css"
import avatarReplacer from "../assets/profile_picture_replacer.jpg"
import { BadgeCheck, CircleQuestionMark, Mars, Venus } from "lucide-react"

export default function ProfileSection1 (props) {

    const user = props.userData

    return (
        <div className="flex justify-center mb-12">
            <div className="justify-items-center">
                {user.Profile.avatar ? 
                    <img src={user.Profile.avatar} alt="avatar" className="rounded-full size-24 justify-self-center mb-3" /> :
                    <img src={avatarReplacer} alt="avatar" className="rounded-full size-24 justify-self-center mb-3" />
                }
                <div className="flex items-center space-x-2 font-semibold text-xl">
                    <p>{user.Profile.first_name}</p>
                    <p>{user.Profile.last_name}</p>
                    {user.is_verified ? <BadgeCheck className="size-5 text-blue-500"/> : <></> }
                </div>

                {user.is_verified ? 
                    <div className="text-sm mb-2">
                        <p>{user.email}</p>
                    </div> : <></>
                }
                
                <div className="flex space-x-2 text-sm">
                    {user.Profile.gender === 'male' ? (
                        <>
                            <Mars className="text-blue-400 size-4"/>
                            <span>Male - </span>
                        </>
                    ) : user.Profile.gender === 'female' ? (
                        <>
                            <Venus className="text-pink-400 size-4"/>
                            <span>Female - </span>
                        </>
                    ) : <>
                            <CircleQuestionMark className="text-yellow-400 size-4"/>
                            <span>unknown - </span>
                        </>}
                    <p>Joined since</p>
                    <p>{new Date(user.createdAt).getFullYear()}</p>
                </div>
            </div>
        </div>
    )
}