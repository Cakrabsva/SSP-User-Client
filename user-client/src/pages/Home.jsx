import "../index.css"
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { Link } from 'react-router-dom';
import PromotionSlider from "../components/PromotionCarousel";
import PromotionHeader from "../components/PromotionHeader";

export default function Home () {
    return (
        <div 
            className="
            max-w-[411px] min-w-[375px] h-screen pb-8
            border border-gray-200 rounded-4xl shadow-lg
            mx-auto 
            bg-white
            overflow-auto custom-scrollbar
            relative">
            <div className="sticky top-0 bg-white pt-8 pb-4">
                <Header />
            </div>
            <div className="px-6 mt-4 space-y-3">
                <PromotionHeader/>
                <PromotionSlider />
            </div>
            <div className="flex justify-center">
                <Navbar />
            </div>
        </div>
    )
}