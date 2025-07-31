import "../index.css"
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import PromotionSlider from "../components/PromotionCarousel";
import PromotionHeader from "../components/PromotionHeader";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchGlobalData } from "../features/global-data/globalData";

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
            <div className="px-6 mt-4 space-y-3 z-0">
                <PromotionHeader/>
                <PromotionSlider />
            </div>
            <div className="flex justify-center items-center mt-20">
                <h1 className="font-semibold text-2xl">No data</h1>
            </div>
            <Navbar data={{active:'Home'}}/>
        </div>
    )
}