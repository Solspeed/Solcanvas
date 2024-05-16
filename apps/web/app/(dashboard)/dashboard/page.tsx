import SideNavbar from "../components/SideNavbar"
import Main from "../components/Main"

export default function Home() {
  return (
    <div className="flex">
      <SideNavbar />
      <div className="flex-1 md:flex h-screen relative">
        <Main />
      </div>
    </div>
  );
}
