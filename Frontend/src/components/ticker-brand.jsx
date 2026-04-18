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
const CARD_HEIGHT = 50;
const COPIES = 10;

const items = Array.from({ length: COPIES }, () => images).flat();

export default function ImageTicker() {
  const [scope, animate] = useAnimate();
  const totalWidthRef = useRef(0);

  useEffect(() => {
    const track = scope.current;
    if (!track) return;

    const baseCards = Array.from(track.querySelectorAll("img")).slice(0, images.length);

    const startAnimation = () => {
      let w = 0;
      baseCards.forEach((img) => { w += img.offsetWidth + GAP; });
      totalWidthRef.current = w;

      animate(
        track,
        { x: [0, -w] },
        {
          duration: w / 150,
          ease: "linear",
          repeat: Infinity,
        }
      );
    };

    let loaded = 0;
    baseCards.forEach((img) => {
      const onLoad = () => { if (++loaded === baseCards.length) startAnimation(); };
      img.complete ? onLoad() : img.addEventListener("load", onLoad);
    });
  }, []);

  return (
  <div className="relative w-480 overflow-hidden py-5 bg-white isolate">
      <div 
        className="absolute left-0 top-0 bottom-0 z-20 pointer-events-none"
        style={{ 
          width: '250px', // Total lebar overlay
          background: 'linear-gradient(to right, white 0%, white 120px, transparent 100%)' 
        }} 
      />
      <div 
        className="absolute right-0 top-0 bottom-0 z-20 pointer-events-none"
        style={{ 
          width: '250px', 
          background: 'linear-gradient(to left, white 0%, white 120px, transparent 100%)' 
        }} 
      />
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
            className="block shrink-0 object-contain"
            style={{ height: CARD_HEIGHT, width: "auto" }}
          />
        ))}
      </motion.div>
    </div>
  );
}