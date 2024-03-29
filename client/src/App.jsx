import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import ProductInfo from "./components/ProductInfo";
import MotorStats from "./components/MotorStats";
import Accessories from "./components/Accessories";

export default function App() {
  return (
      <main className="max-w-7xl mx-auto h-full">
        <Navbar />
        <Hero />
        <Stats />
        <ProductInfo />
        <MotorStats />
        <Accessories />
      </main>   
  )
}