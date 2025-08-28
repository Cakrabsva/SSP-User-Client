import { useDispatch, useSelector } from "react-redux"
import PageHeader from "../components/PageHeader"
import "../index.css"
import { useEffect } from "react"
import { onGetAllTripBookings } from "../features/dispatch-function/tripBookingSlices"

export default function MyBookingTrips () {

    const dispatch = useDispatch()
    const { tripBookings, loading, error } = useSelector(state => state.tripBookings)

    useEffect(()=>{ 
        dispatch(onGetAllTripBookings())
    }, [dispatch])

    const getStatusClass = (status) => {
        switch (status) {
            case 'Confirmed':
                return 'bg-green-200 text-green-800';
            case 'Pending':
                return 'bg-yellow-200 text-yellow-800';
            case 'Cancelled':
                return 'bg-red-200 text-red-800';
            default:
                return 'bg-gray-200 text-gray-800';
        }
    }

    // Helper function to format number as Rupiah
    // const formatRupiah = (number) => {
    //     return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
    // };

    return (
        <div>
            <div className="sticky w-full top-0 p-4 z-10 bg-white">
                <PageHeader data={{header: 'My Trips', navigateTo:'/trip-list'}}/>
            </div>
            <div className="p-4">
                {loading && <div className="text-center">Loading your trips...</div>}
                {error && <div className="text-center text-red-500">Error: {error}</div>}
                {!loading && !error && tripBookings && tripBookings.data.length > 0 ? (
                    <div className="space-y-6">
                        {tripBookings.data.map(booking => (
                            <div key={booking.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow duration-300">
                                <img 
                                    src={booking.OpenTrip.image_url} 
                                    alt={booking.OpenTrip.title} 
                                    className="w-full md:w-48 h-48 object-cover"
                                />
                                <div className="p-5 flex flex-col flex-grow justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800">{booking.OpenTrip.title}</h3>
                                        <p className="text-md text-gray-600">{booking.OpenTrip.location}</p>
                                        <p className="text-sm text-gray-500 mt-2">
                                            Departure: {new Date(booking.TripDate.departure_date).toLocaleDateString()}
                                        </p>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Return: {new Date(booking.TripDate.return_date).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <div className="mt-4 flex items-end justify-between">
                                        <div>
                                            <p className="text-sm text-gray-500 mt-2">
                                                Booked on: {new Date(booking.booked_at).toLocaleString()}
                                            </p>
                                        </div>
                                        <span className={`px-4 py-1 text-sm font-semibold rounded-full ${getStatusClass(booking.status)}`}>
                                            {booking.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    !loading && <div className="text-center text-gray-500 mt-10">You have no booked trips yet.</div>
                )}
            </div>
        </div>
    )
}