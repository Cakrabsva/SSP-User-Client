import { ChevronLeft, ChevronRight, CircleArrowLeft, Headset, Mail, RectangleEllipsis, Send, TriangleAlert, UserRound, UserRoundPen } from "lucide-react";
import "../index.css"
import { Link } from 'react-router-dom';
import PageHeader from "../components/PageHeader";
import SettingSectionGeneral from "../components/SettingSectionGeneral";
import SettingSectionFeedback from "../components/SettingSectionFeedback";

export default function Settings () {
    return (
        <div className="pt-8">
            <div className="px-6">
                <PageHeader data={{header: 'Settings', navigateTo:'/'}}/>
                <SettingSectionGeneral/>
                <SettingSectionFeedback/>
            </div>
        </div>
    )
}