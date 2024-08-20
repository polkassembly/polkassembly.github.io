import React, { useEffect, useState, useRef } from "react";
import LazyLoad from "react-lazyload";
import { cn } from "../../utils/utils";
import quote from "../../assets/images/quoteup.svg";
import starPink from "../../assets/images/star-pink.svg";

interface Item {
  author?: string;
  designation?: string;
  testimony?: string;
  title?: string;
  image?: string;
}

interface InfiniteMovingCardsProps {
  items: Item[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  type: "logos" | "cards" | "banner";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "slow",
  type,
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "normal" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const speeds: { [key: string]: string } = {
        fast: "20s",
        normal: "60s",
        slow: "240s",
      };
      containerRef.current.style.setProperty(
        "--animation-duration",
        speeds[speed]
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 w-full overflow-hidden", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <LazyLoad key={idx} height={200} offset={100} once>
            <li className={getCardClasses(type)} key={idx}>
              {renderCardContent(type, item)}
            </li>
          </LazyLoad>
        ))}
      </ul>
    </div>
  );
};

function getCardClasses(type: string): string {
  switch (type) {
    case "logos":
      return "h-[120px] w-[120px] md:w-[212px] md:min-h-[212px] flex flex-col hover:border-3 hover:border-pa-pink items-center justify-center relative rounded-2xl bg-white border-4 flex-shrink-0 border-[#E1E1E1] p-4";
    case "cards":
      return "w-[350px] max-w-full relative rounded-2xl border flex-shrink-0 bg-pa-pink-light px-8 py-6 md:w-[550px]";
    case "banner":
      return "flex items-center md:gap-4 ";
    default:
      return "";
  }
}

function renderCardContent(type: string, item: Item): JSX.Element | null {
  switch (type) {
    case "logos":
      return (
        <a
          href={
            ["moonbase", "moonriver", "moonbeam", "kilt", "automata"].includes(
              item.title || ""
            )
              ? `https://${item.title}.polkassembly.network`
              : `https://${item.title}.polkassembly.io`
          }
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={item.image || ""}
            alt={item.title || "default"}
            className="rounded-full h-auto md:w-16 w-10 mx-auto"
          />
          <h3
            className={`mt-3 md:mt-5 text-sm font-medium md:text-lg md:font-semibold text-black ${
              item.title === "Xx" ? "uppercase" : "capitalize"
            } tracking-normal lg:tracking-widest text-center leading-none md:leading-auto px-2`}
          >
            {item.title}
          </h3>
        </a>
      );
    case "cards":
      return (
        <blockquote>
          <div className="flex gap-2 relative w-full items-start">
            <img
              src={item.image || ""}
              alt={item.title || "default"}
              className="rounded-full h-12 w-12 object-cover"
            />
            <div className="flex flex-col">
              <span className="relative z-20 text-lg leading-[1.6] text-black font-semibold">
                {item.author}
              </span>
              <span className="text-base leading-[1.6] text-black font-normal">
                {item.designation}
              </span>
            </div>
            <img src={quote} className="absolute right-6 top-6 w-8 h-8" />
          </div>
          <div className="relative z-20 mt-6 flex flex-row items-center">
            <span className="flex flex-col gap-1">
              <span className="text-sm leading-[1.6] text-black font-normal">
                {item.testimony}
              </span>
            </span>
          </div>
        </blockquote>
      );
    case "banner":
      return (
        <>
          <h1 className="text-3xl inline-flex items-center gap-2 lg:text-6xl font-bold text-black">
            {item.title}
          </h1>
          <img src={starPink} className="w-8 md:w-12 ml-6 md:ml-12" />
        </>
      );
    default:
      return null;
  }
}