import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { onGetOpenTrip } from "../features/dispatch-function/openTripSlices";
import PageHeader from "../components/PageHeader";
import { Loader2, MapPin, CalendarDays, Users, Wallet, Info, Star } from "lucide-react";

export default function TripDetail () {

    const {id} = useParams()
    const dispatch = useDispatch()
    const { openTrip, loading, error } = useSelector(state => state.openTrip);

    useEffect(()=>{ 
        dispatch(onGetOpenTrip(id))
    }, [dispatch, id])

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Loader2 className="animate-spin w-12 h-12 text-blue-500" />
            </div>
        );
    }

    if (error) {
        return <div className="text-center text-red-500 p-8">Error fetching trip details. Please try again later.</div>;
    }

    const trip = openTrip?.data;

    if (!trip) {
        return <div className="text-center p-8">Trip not found.</div>;
    }

    // const formattedStartDate = new Date(trip.departure_date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
    const formattedPrice = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(trip.price);

    return (
        <div>
            <div className="sticky w-full top-0 p-4 z-10 bg-white">
                <PageHeader data={{header: 'Trip Detail', navigateTo:'/trip-list'}}/>
            </div>

            <div className="px-4">
                <img src={trip.image_url} alt={trip.title} className="w-full h-full object-cover rounded-xl shadow-lg mb-4" />

                <h1 className="text-3xl font-bold mb-2 text-gray-800">{trip.title}</h1>

                <div className="flex space-x-3">

                    <div className="flex items-center text-gray-500 mb-6">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span>{trip.location}</span>
                    </div>
                    <div className="flex items-center text-yellow-500 font-bold mb-6">
                        <Star strokeWidth={3} className="w-5 h-5 mr-2" />
                        <span>{trip.rating}</span>
                    </div>
                </div>

                <div className="space-y-5 text-gray-700 bg-gray-50 p-4 rounded-lg pb-29">
                    <div className="flex items-start"><CalendarDays className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-blue-500" /><div><p className="font-semibold">Duration</p><p>{`${trip.duration_days} Days ${trip.duration_nights} Nights`}</p></div></div>
                    <div className="flex items-start"><Users className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-green-500" /><div><p className="font-semibold">Quota</p><p>{trip.available_slots} people</p></div></div>
                    <div className="flex items-start"><Wallet className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-yellow-500" /><div><p className="font-semibold">Price</p><p>{formattedPrice}</p></div></div>
                    <div className="flex items-start"><Info className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-purple-500" /><div><p className="font-semibold">Description</p><p className="text-justify leading-relaxed">{trip.description}</p></div></div>
                </div>
            </div>

            <div className="left-0 right-0 bg-white p-4 border-t border-gray-200 shadow-lg pb-10 sticky w-full bottom-0 p-4 z-10 bg-white">
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg cursor-pointer">
                    Book Now
                </button>
            </div>
        </div>
    )
}