import "../index.css"
import { ChevronLeft } from "lucide-react"
import { Link } from 'react-router-dom';
import avatarReplacer from "../assets/profile_picture_replacer.jpg"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGlobalData } from "../features/global-data/globalData";
import Loading from "../components/Loading";

export default function EditProfile () {

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
                <Link to="/profile">
                    <ChevronLeft/>
                </Link>
                <p className="font-bold text-lg justify-self-center">
                    Edit Profile
                </p>
            </div>

            <div className="mb-12">
                <div className="justify-items-center">
                    <img src={avatarReplacer} alt="avatar" className="rounded-full size-24 justify-self-center mb-3" />
                </div>
                <div className="text-blue-700 font-semibold hover:text-blue-400 cursor-pointer text-center">
                    <a>Change profile avatar</a>
                </div>
            </div>
            
            <div className="justify-items-center">
                <form 
                action="">
                    <div className="space-y-6">
                        <div className="flex space-x-2">
                            <div className="">
                                <label htmlFor="first_name" className="font-semibold ml-1">First Name</label> <br />
                                <input 
                                    type="text" 
                                    name="first_name" 
                                    id="first_name"
                                    value={user.Profile.first_name || ''}
                                    className="border border-gray-300 rounded-lg w-46 h-10 px-3"/>
                            </div>
                            <div>
                                <label htmlFor="last_name" className="font-semibold ml-1">Last Name</label> <br />
                                <input 
                                    type="text" 
                                    name="last_name" 
                                    id="last_name"
                                    value={user.Profile.last_name || ''}
                                    className="border border-gray-300 rounded-lg w-46 h-10 px-3"/>
                            </div>
                        
                        </div>
                        <div className="flex space-x-2">
                            <div>
                                <label htmlFor="born_date" className="font-semibold ml-1">Born Date</label> <br />
                                <input 
                                    type="date" 
                                    name="born_date" 
                                    id="born_date"
                                    value={user.Profile.born_date || ''}
                                    className="border border-gray-300 rounded-lg w-46 h-10 px-3"/>
                            </div>
                            <div>
                                <label htmlFor="gender" className="font-semibold ml-1">Gender</label> <br />
                                <select 
                                    name="gender" 
                                    id="gender"
                                    value={user.Profile.gender || ''}
                                    className="border border-gray-300 rounded-lg w-46 h-10 px-3">
                                        <option value="">Select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                            </div>
                        </div>
                    
                            <div>
                                <label htmlFor="bio" className="font-semibold ml-1">Bio</label> <br />
                                <textarea 
                                    name="bio" 
                                    id="bio"
                                    wrap="soft"
                                    value={user.Profile.bio || ''}
                                    className="border border-gray-300 rounded-lg w-full h-32 px-3 py-3 text-wrap"></textarea>
                            </div>
                        <div className="flex justify-end">
                            <button type="submit" className="rounded-full bg-yellow-300 hover:bg-yellow-400 cursor-pointer font-semibold py-3 px-8">Save</button>
                        </div>
                    </div>
                </form>
            </div>
            


        </div>
    )
}