import { CarouselBanner } from "@/components/carousel-banner";
import Hero from "@/components/hero-section";
import { Post } from "@/components/post-section";
import Testimoni from "@/components/testimoni";
import ImageTicker from "@/components/ticker-brand";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex flex-col items-center justify-center space-y-30">
        <Hero />
        <ImageTicker />
        <Testimoni />
        <div className="px-30">
          <CarouselBanner />
        </div>
        <Post />
      </div>
    </div>
  );
}
