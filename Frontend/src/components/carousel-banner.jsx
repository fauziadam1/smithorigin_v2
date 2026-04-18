import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils"; 
import { useState, useRef, useEffect } from "react";

export function CarouselBanner() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full mx-auto relative group">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="rounded-2xl">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="rounded-2xl">
              <div className="p-2 rounded-2xl">
                <Card className="shadow-none p-0">
                  <CardContent className="flex aspect-video items-center justify-center p-0">
                    <img
                      src="/banner.jpg"
                      alt={`Banner ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className=" opacity-0 group-hover:opacity-100 transition-opacity duration-200 size-10" />
        <CarouselNext className=" opacity-0 group-hover:opacity-100 transition-opacity duration-200 size-10" /> */}
        <CarouselPrevious className="size-10" />
        <CarouselNext className="size-10" />
      </Carousel>
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={cn(
              "h-2 transition-all duration-300 rounded-full",
              current === i 
                ? "w-8 bg-black dark:bg-foreground" 
                : "w-2 bg-gray-300 hover:bg-gray-400"
            )}
          />
        ))}
      </div>
    </div>
  );
}