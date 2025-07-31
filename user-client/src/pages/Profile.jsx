import "../index.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGlobalData } from "../features/global-data/globalData";
import Loading from "../components/Loading";
import ProfileSection1 from "../components/ProfileSection1";
import ProfileSection2 from "../components/ProfileSection2";
import ProfileSection3 from "../components/ProfileSection3";
import PageHeader from "../components/PageHeader";
import Navbar from "../components/Navbar";


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
        <div>
            <div className="pt-8 px-6">
                <PageHeader data={{ header: 'Profile', navigateTo:'/' }}/>
                {!user.is_verified ? 
                    <div className="bg-yellow-200 text-center rounded mb-8">
                        <p>You are not verified, please verify your email!</p>
                    </div> : <></>
                }
                <ProfileSection1 userData={user}/>
                <ProfileSection2 />
                <ProfileSection3 userData={user}/>
                <Navbar data={{active:'Profile'}}/>
            </div>
        </div>
    )
}