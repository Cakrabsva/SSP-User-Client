import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";

export default function Store () {
    return (
        <div className="pt-8 px-6">
            <PageHeader data={{header: 'Store', navigateTo:'/'}}/>
            <Navbar data={{active:'Store'}}/>
        </div>
    )
}