import DailySpecials from "./components/DailySpecials";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Locations from "./components/Locations";
import LunchSpecials from "./components/LunchSpecials";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative">
        <Hero />
        <div className="absolute top-0 left-0 right-0 z-20">
          <Navbar />
        </div>
      </div>

      <LunchSpecials />

      <DailySpecials />

      <Locations />

      <Footer />
    </div>
  );
}
