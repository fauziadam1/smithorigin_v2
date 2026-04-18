import { CarouselBanner } from "@/components/carousel-banner";
import Hero from "@/components/hero-section";
import Testimoni from "@/components/testimoni";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex flex-col items-center justify-center space-y-30">
        <Hero />
        <Testimoni />
        <div className="px-30">
          <CarouselBanner />
        </div>
      </div>
    </div>
  );
}
