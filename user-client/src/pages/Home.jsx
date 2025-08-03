import "../index.css"
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import PromotionSlider from "../components/PromotionCarousel";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchGlobalData } from "../features/global-data/globalData";
import BestDestinationSlider from "../components/BestDestinationCarousel";
import BestProductSlider from "../components/BestProductCarousel";

export default function Home () {

    const dispatch = useDispatch()
    
    useEffect(()=>{ 
        dispatch(fetchGlobalData)
    }, [dispatch])

    return (
        <div className="">
            <div className="sticky top-0 bg-white pt-6 pb-4 z-10">
                <Header />
            </div>
            <div className="space-y-6 mb-28">
                <PromotionSlider />
                <BestDestinationSlider />
                <BestProductSlider/>
            </div>
            <Navbar data={{active:'Home'}}/>
        </div>
    )
}