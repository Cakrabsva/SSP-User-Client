import "../index.css"
import { Link } from 'react-router-dom';
import {Settings, ChevronLeft, Mars, UserRound, ChevronRight, Heart, TicketsPlane, Venus, CircleQuestionMark, Award, Mail, MailWarning, BadgeCheck } from "lucide-react"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGlobalData } from "../features/global-data/globalData";
import avatarReplacer from "../assets/profile_picture_replacer.jpg"
import Loading from "../components/Loading";


export default function Profile () {

    let {user, isLoading} = useSelector(state => state.globalData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchGlobalData());
    }, [dispatch]);

    if(isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <div className="pt-8 px-6">
            <div className="grid grid-cols-3 mb-6">
                <Link to="/">
                    <ChevronLeft/>
                </Link>
                <p className="font-bold text-lg justify-self-center">
                    Profile
                </p>
            </div>
            {!user.is_verified ? 
                <div className="bg-yellow-200 text-center rounded mb-8">
                    <p>You are not verified, please verify your email!</p>
                </div> : <></>
            }

            <div className="flex justify-center mb-12">
                <div className="justify-items-center">
                    {user.Profile.avatar ? 
                        <img src={user.Profile.avatar} alt="avatar" className="rounded-full size-24 justify-self-center mb-3" /> :
                        <img src={avatarReplacer} alt="avatar" className="rounded-full size-24 justify-self-center mb-3" />
                    }
                    <div className="flex items-center space-x-2 font-semibold text-xl">
                        <p>{user.Profile.first_name}</p>
                        <p>{user.Profile.last_name}</p>
                        {user.is_verified ? <BadgeCheck className="size-5"/> : <></> }
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
                    <div>
                        
                    </div>

                    
                </div>
            </div>

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
            
            <Link to='/edit-profile'>
                <div className="grid grid-cols-2 hover:bg-gray-100 duration-300 cursor-pointer w-full px-6 py-3">
                        <div className="flex space-x-4">
                            <Settings className="size-6 text-gray-400" />
                            <p className="font-semibold text-gray-700">Edit Profile</p>
                        </div>
                    <div className="justify-items-end">
                        <ChevronRight className="text-gray-400" />
                    </div>
                </div>
            </Link>
           
            <div className="grid grid-cols-2 hover:bg-gray-100 duration-300 cursor-pointer w-full px-6 py-3">
                <div className="flex space-x-4">
                    <Heart className="size-6 text-gray-400" />
                    <p className="font-semibold text-gray-700">Whistlist</p>
                </div>
                <div className="justify-items-end">
                    <ChevronRight className="text-gray-400" />
                </div>
            </div>
            <div className="grid grid-cols-2 hover:bg-gray-100 duration-300 cursor-pointer w-full px-6 py-3">
                <div className="flex space-x-4">
                    <TicketsPlane className="size-6 text-gray-400" />
                    <p className="font-semibold text-gray-700">Previous Trip</p>
                </div>
                <div className="justify-items-end">
                    <ChevronRight className="text-gray-400" />
                </div>
            </div>
            {user.is_verified ? 
            <></>:
            <div className="grid grid-cols-2 hover:bg-gray-100 duration-300 cursor-pointer w-full px-6 py-3">
                <div className="flex space-x-4">
                    <MailWarning className="size-6 text-yellow-400" />
                    <p className="font-semibold text-yellow-400">Verify User !</p>
                </div>
                <div className="justify-items-end">
                    <ChevronRight className="text-yellow-400" />
                </div>
            </div>
            }
        </div>
    )
}