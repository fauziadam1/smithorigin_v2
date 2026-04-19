import { useRef, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useAnimate } from "motion/react";

const images = [
  { src: "/aula.png" },
  { src: "/leobog.png" },
  { src: "/mchose.png" },
  { src: "/vortex 1.png" },
];

const GAP = 64;
const COPIES = 10;

const items = Array.from({ length: COPIES }, () => images).flat();

export default function ImageTicker() {
  const [scope, animate] = useAnimate();
  const totalWidthRef = useRef(0);

  useEffect(() => {
    const track = scope.current;
    if (!track) return;

    const baseCards = Array.from(track.querySelectorAll("img")).slice(
      0,
      images.length,
    );

    const startAnimation = () => {
      let w = 0;
      baseCards.forEach((img) => {
        w += img.offsetWidth + GAP;
      });
      totalWidthRef.current = w;

      animate(
        track,
        { x: [0, -w] },
        {
          duration: w / 150,
          ease: "linear",
          repeat: Infinity,
        },
      );
    };

    let loaded = 0;
    baseCards.forEach((img) => {
      const onLoad = () => {
        if (++loaded === baseCards.length) startAnimation();
      };
      img.complete ? onLoad() : img.addEventListener("load", onLoad);
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-5 bg-white isolate">
      <div className="absolute w-40 lg:w-62.5 left-0 top-0 bottom-0 z-20 pointer-events-none bg-linear-to-r from-white via-white to-transparent via-[50px] lg:via-[120px]" />
      <div className="absolute w-40 lg:w-62.5 right-0 top-0 bottom-0 z-20 pointer-events-none bg-linear-to-l from-white via-white to-transparent via-[50px] lg:via-[120px]" />
      <motion.div
        ref={scope}
        className="relative z-10 flex items-center will-change-transform"
        style={{ gap: GAP }}
      >
        {items.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt=""
            className="block shrink-0 object-contain h-6 sm:h-7 lg:h-9 xl:h-12 w-auto"
          />
        ))}
      </motion.div>
    </div>
  );
}
