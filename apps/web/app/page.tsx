import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <main className="bg-black flex min-h-screen flex-col items-center justify-between p-6 lg:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Navbar />
      </div>
    </main>
  );
}
