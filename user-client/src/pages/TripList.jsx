import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onGetAllOpenTrips } from "../features/dispatch-function/openTripSlices";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import TripCard from "../components/TripCard";


export default function TripList () {
    const dispatch = useDispatch()
    let openTripsData = useSelector(state => state.openTrip)

    useEffect(()=>{ 
        dispatch(onGetAllOpenTrips())
    }, [dispatch])

    return (
        <div className="">
                <div className="sticky w-full top-0 p-4 z-10 bg-white">
                    <PageHeader data={{header: 'Trip', navigateTo:'/'}}/>
                </div>
                {openTripsData.loading ? (
                    <div className="flex justify-center items-center p-6">
                        <Loader2 className="animate-spin w-12 h-12 text-blue-500" />
                    </div>
                ):(
                    <div className="p-4 space-x-1 mb-32">
                            {openTripsData.openTrips?.data && openTripsData.openTrips.data.map((el) => (
                            <Link to={`/trip-detail/${el.id}`} key={el.id}>
                                <TripCard  data={el} />
                            </Link>
                            ))}
                    </div>
                )
            }
                <Navbar data={{active:'Trip'}}/>
        </div>
    )
}