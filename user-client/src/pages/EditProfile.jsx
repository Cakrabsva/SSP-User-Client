import "../index.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGlobalData } from "../features/global-data/globalData";
import Loading from "../components/Loading";
import FormEditProfile from "../components/FormEditProfile";
import UpdateAvatar from "../components/UpdateAvatar";
import PageHeader from "../components/PageHeader";

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
        <div className="p-4">
            <PageHeader data={{header:'Edit Profile', navigateTo:'/profile'}}/>
            <UpdateAvatar userData={user}/>
            <FormEditProfile userData={user}/>
        </div>
    )
}