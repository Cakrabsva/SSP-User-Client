import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";

export default function Store () {
    return (
        <div className="p-4">
            <PageHeader data={{header: 'Store', navigateTo:'/'}}/>
            <Navbar data={{active:'Store'}}/>
        </div>
    )
}