import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";

export default function App() {
  return (
      <main className="max-w-7xl mx-auto h-full">
        <Navbar />
        <Hero />
        <Stats />
      </main>   
  )
}