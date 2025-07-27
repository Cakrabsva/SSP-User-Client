import "../index.css"
import { ChevronLeft } from "lucide-react"
import { Link } from 'react-router-dom';
import avatarReplacer from "../assets/profile_picture_replacer.jpg"
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { fetchGlobalData } from "../features/global-data/globalData";
import Loading from "../components/Loading";
import FormEditProfile from "../components/FormEditProfile";

export default function EditProfile () {

    const {user, isLoading} = useSelector(state => state.globalData)
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
        <FormEditProfile userData={user}/>
        </div>
    )
}