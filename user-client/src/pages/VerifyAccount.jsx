import "../index.css"
import { BadgeCheck, ChevronLeft, Loader2, Mail } from "lucide-react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchGlobalData } from "../features/global-data/globalData";
import { onSendingVerifyEmail } from "../features/dispatch-function/userSlices";
import CountdownTimer from "../components/CountDownTimer";
import Loading from "../components/Loading";
import PageHeader from "../components/PageHeader";

export default function VerifyUser () {

    let {user, isLoading} = useSelector(state => state.globalData)
    const [sentEmailLoading, SetSentEmailLoading] = useState(false)
    const getCountdown = localStorage.getItem('countdown_end_time')
    const [isCountDown, setCountDown] = useState(getCountdown)
    const dispatch = useDispatch()

    const handleOnVerifyUser = async () => {
        SetSentEmailLoading(true)
        await dispatch(onSendingVerifyEmail(user.email))
        SetSentEmailLoading(false)
        setCountDown(true)

    }

    const handleCompleteCountDown = () => {
        setCountDown(false)
    };

    useEffect(() => {
        dispatch(fetchGlobalData())
    },[dispatch])

    if(isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <div className="pt-8">
            <div className="px-6">
                <PageHeader data={{header:'Verify Account', navigateTo:'/Profile'}}/>
                <div className="justify-center mt-16">
                    <p className="text-gray-400 text-center font-semibold">Please verify your Account to get full access</p>
                </div>
                <div className="mt-8">
                    <div className="flex justify-center items-center space-x-3">
                        <p className="py-3 px-6 rounded border-gray-300 font-semibold">
                            {user.email}
                        </p>
                        {user.is_verified ? (
                            <div className="flex space-x-3 text-green-600">
                                <p>Verified</p>
                                <BadgeCheck />
                            </div>
                        ) : (
                            sentEmailLoading ? (
                                <div className="flex justify-center items-center">
                                    <Loader2 className="animate-spin size-6 text-blue-300" />
                                </div>
                                
                            ) : (
                                (isCountDown ?
                                    <div className="flex items-center justify-center">
                                        <CountdownTimer durationInSeconds={300} onComplete={handleCompleteCountDown} />
                                    </div> :
                                    <button
                                        onClick={handleOnVerifyUser}
                                        className="px-6 h-10 text-center bg-yellow-400 font-semibold rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                                        Verify
                                    </button>
                                )
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}