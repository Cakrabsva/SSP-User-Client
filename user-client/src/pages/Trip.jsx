import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import TripCard from "../components/TripCard";
import { useEffect } from "react";
import { onGetAllOpenTrips } from "../features/dispatch-function/openTripSlices";
import { Loader2 } from "lucide-react";


export default function Trip () {
    const dispatch = useDispatch()
    let openTripsData = useSelector(state => state.openTrip)

    useEffect(()=>{ 
        dispatch(onGetAllOpenTrips())
    }, [dispatch])
    return (
        <div className="">
            <div className="sticky w-full top-0 pb-4 z-10">
                <PageHeader data={{header: 'Trip', navigateTo:'/'}}/>
            </div>
            {openTripsData.loading ? (
                <div className="flex justify-center items-center p-6">
                    <Loader2 className="animate-spin w-12 h-12 text-blue-500" />
                </div>
            ):(
                <div className="space-y-8 px-3 mb-32">
                    {openTripsData.openTrips.data.map((el) => (
                        <TripCard data={el} />
                    ))}
                </div>
            )
        }
            <Navbar data={{active:'Trip'}}/>
        </div>
    )
}