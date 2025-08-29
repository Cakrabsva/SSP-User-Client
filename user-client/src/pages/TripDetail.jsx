import Swal from 'sweetalert2';
import PageHeader from "../components/PageHeader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { onGetOpenTrip } from "../features/dispatch-function/openTripSlices";
import { Loader2, MapPin, CalendarDays, Users, Wallet, Info, Star, Clock } from "lucide-react";
import { onGetAllTripReviews } from "../features/dispatch-function/tripReviewSlices";
import { onGetAllTripDates } from "../features/dispatch-function/tripDateSlices";
import { onCreateTripBooking, onGetAllTripBookings, onGetOpenTripBookings } from "../features/dispatch-function/tripBookingSlices";
import MyDate from '../helpers/MyFunction';

export default function TripDetail () {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id, OpenTripId} = useParams()
    const { openTrip, loading, error } = useSelector(state => state.openTrip);
    const { tripReviews } = useSelector(state => state.tripReviews);
    const { tripDates } = useSelector(state => state.tripDates)
    const { openTripBookings} = useSelector(state => state.tripBookings)
    const reviews = tripReviews?.data

    useEffect(()=>{ 
        dispatch(onGetOpenTrip(id))
        dispatch(onGetAllTripReviews(id))
        dispatch(onGetAllTripDates(id))
        dispatch(onGetAllTripBookings(id))
        dispatch(onGetOpenTripBookings({OpenTripId:id}))
    }, [dispatch, id])

    const handleOnsubmitTripdate = async (TripDateId) => {
        await dispatch(onCreateTripBooking({ OpenTripId: id, TripDateId }));
        navigate(`/my-booking-trips`);
    }

    const handleTotalGuest = (id) => {
        const pendingCount = openTripBookings.data?.filter(item => item.TripDateId === id).length
        return pendingCount

    }

    const handleBookNow = () => {
        if (!tripDates?.data || tripDates.data.length === 0) {
            Swal.fire({
                icon: 'info',
                title: 'No Available Dates',
                text: 'There are no available dates for this trip at the moment. Please check back later.',
                width: '25rem',
            });
            return;
        }

        const dateOptions = tripDates.data.reduce((options, date) => {
            const departure = new Date(date.departure_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
            const arrival = new Date(date.return_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
            options[date.id] = `${departure} to ${arrival}`;
            return options;
        }, {});

        Swal.fire({
            title: 'Select a Date',
            input: 'select',
            inputOptions: dateOptions,
            inputPlaceholder: 'Choose your preferred date',
            showCancelButton: true,
            confirmButtonText: 'Continue to Book',
            confirmButtonColor: '#facc15', // Tailwind yellow-400
            width: '25rem',
            cancelButtonText: 'Cancel',
            preConfirm: (tripDateId) => {
                if (!tripDateId) {
                    Swal.showValidationMessage(`Please select a date`);
                }
                return tripDateId;
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const selectedDate = dateOptions[result.value];
                Swal.fire({
                    title: 'Date Selected!',
                    html: `You have selected the trip on:<br><b>${selectedDate}</b><br><br>You will be redirected to payment shortly.`,
                    icon: 'success',
                    confirmButtonColor: '#facc15',
                    // showConfirmButton: false,
                    width: '25rem',
                }).then(() =>
                    handleOnsubmitTripdate(result.value),
                ) // jika ingin update booking coba untuk dispatch disini
            }
        });
    };

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

                <div className="space-y-5 text-gray-700 bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start"><Clock className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-blue-500" /><div><p className="font-semibold">Duration</p><p>{`${trip.duration_days} Days ${trip.duration_nights} Nights`}</p></div></div>
                    <div className="flex items-start"><Users className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-green-500" /><div><p className="font-semibold">Quota</p><p>{trip.available_slots} people</p></div></div>
                    <div className="flex items-start"><Wallet className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-yellow-500" /><div><p className="font-semibold">Price</p><p>{formattedPrice}</p></div></div>
                    <div className="flex items-start"><Info className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-purple-500" /><div><p className="font-semibold">Description</p><p className="text-justify leading-relaxed">{trip.description}</p></div></div>
                    <div className="flex items-start">
                        <CalendarDays className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-blue-500" />
                        <div>
                            <p className="font-semibold">Departure - Return Date:</p>
                            {tripDates.data && tripDates.data.length > 0 ? (
                                tripDates.data.map((dates) => (
                                    <p key={dates.id}>
                                        {`${MyDate.formatDate(dates.departure_date)} - ${MyDate.formatDate(dates.return_date)} ${handleTotalGuest(dates.id)}/${dates.quota}`}
                                    </p>
                                ))
                            ) : (
                                <p>No available dates.</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Reviews & Ratings</h2>
                    {reviews && reviews.length > 0 ? (
                        <div className="space-y-1">
                            {reviews.map((review) => (
                                <div key={review.id} className="bg-gray-50 p-4 rounded-lg">
                                    <div className="flex items-center mb-2">
                                        {review.User?.Profile?.avatar ? (
                                            <img 
                                                src={review.User.Profile.avatar} 
                                                alt={review.User?.Profile?.first_name} 
                                                className="w-8 h-8 rounded-full mr-3 object-cover" 
                                            />
                                        ) : (
                                            <div className="w-8 h-8 rounded-full mr-3 bg-gray-300 flex items-center justify-center text-gray-600 font-bold">
                                                {review.User?.Profile?.first_name?.charAt(0).toUpperCase() || '?'}
                                            </div>
                                        )}
                                        <p className="font-semibold text-gray-800">{review.User?.Profile?.first_name || 'Anonymous'}</p>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 text-sm">{review.review_text}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 mt-4">No reviews for this trip yet.</p>
                    )}
                </div>
            </div>

            <div className="left-0 right-0 bg-white p-4 border-t border-gray-200 shadow-lg pb-10 sticky w-full bottom-0 p-4 z-10 bg-white">
                <button onClick={handleBookNow} className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg cursor-pointer">
                    Book Now
                </button>
            </div>
        </div>
    )
}