import SideNavbar from "../components/SideNavbar"
import Main from "../components/Main"
// import Projects from "../../marketplace/components/Projects";
import Projects from "../components/Projects"

export default function Home() {
  return (
    <div className="flex">
      <SideNavbar />
      <div className="flex-1 md:flex h-screen relative">
        <Projects />
      </div>
    </div>
  );
}
