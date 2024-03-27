import ItemBar from "./components/ItemBar"
import Navbar from "./components/Navbar"
import Recommendation from "./components/Recommendation"

export default function page() {
    return (
        <div className="w-screen h-screen bg-black">
            <Navbar />
            <div className="space-y-16">
                <ItemBar />
                <div className="sm:pt-16">
                    <Recommendation />
                </div>
            </div>
        </div>
    )
}