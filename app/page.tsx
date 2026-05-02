import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import CategorySection from "@/components/CategorySection";
import MarcLouTable from "@/components/MarcLouTable";
import BusinessModels from "@/components/BusinessModels";
import Trends from "@/components/Trends";
import ToolsAndDevs from "@/components/ToolsAndDevs";
import Footer from "@/components/Footer";
import { categories } from "@/data/products";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030014]">
      <Hero />
      <StatsBar />

      <div id="products" className="max-w-6xl mx-auto px-6 py-16">
        {categories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
        <MarcLouTable />
        <BusinessModels />
        <Trends />
        <ToolsAndDevs />
      </div>

      <Footer />
    </main>
  );
}
