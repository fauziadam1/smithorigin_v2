import { CarouselBanner } from "@/components/carousel-banner";
import Hero from "@/components/hero-section";
import { Post } from "@/components/post-section";
import Testimoni from "@/components/testimoni";
import ImageTicker from "@/components/ticker-brand";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex flex-col items-center justify-center space-y-30">
        <div className="px-10 lg:px-30">
          <Hero />
        </div>
        <ImageTicker />
        <div className="lg:px-30">
          <CarouselBanner />
        </div>
        <Testimoni />
        <div className="w-full px-10 lg:px-30">
          <Post />
        </div>
      </div>
    </div>
  );
}
