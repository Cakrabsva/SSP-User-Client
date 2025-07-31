import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";


export default function Trip () {
    return (
        <div className="pt-8 px-6">
            <PageHeader data={{header: 'Trip', navigateTo:'/'}}/>
            <Navbar data={{active:'Trip'}}/>
        </div>
    )
}