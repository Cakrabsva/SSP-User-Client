import "../index.css"
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import PromotionSlider from "../components/PromotionCarousel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGlobalData } from "../features/global-data/globalData";
import BestDestinationSlider from "../components/BestDestinationCarousel";
import BestProductSlider from "../components/BestProductCarousel";
import { onGetAllOpenTrips } from "../features/dispatch-function/openTripSlices";

export default function Home () {

    const dispatch = useDispatch()
    let openTrips = useSelector(state => state.openTrip)

    useEffect(()=>{ 
        dispatch(fetchGlobalData())
        dispatch(onGetAllOpenTrips())
    }, [dispatch])

    return (
        <div className="p-2">
            <div className="sticky top-0 bg-white pt-6 pb-4 z-10">
                <Header />
            </div>
            <div className="space-y-6 mb-28">
                <PromotionSlider />
                <BestDestinationSlider data={openTrips}/>
                <BestProductSlider/>
            </div>
            <Navbar data={{active:'Home'}}/>
        </div>
    )
}