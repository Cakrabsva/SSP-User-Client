import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";

export default function Message () {
    return (
        <div className="p-4">
            <PageHeader data={{header: 'Message', navigateTo:'/'}}/>
            <Navbar data={{active:'Message'}}/>
        </div>
    )
}