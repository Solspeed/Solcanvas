import ItemBar from "./components/ItemBar"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Recommendation from "./components/Recommendation"

export default function page() {
    return (
        <div className="w-screen bg-black">
            <Navbar />
            <div className="space-y-16">
                <ItemBar />
                <div className="xl:pt-16">
                    <Recommendation />
                </div>
                <div className="xl:pt-36">
                    <Projects />
                </div>
            </div>
        </div>
    )
}