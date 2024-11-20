"use client";
import { mergeClass } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import ShinyStar from "./shiny-star.svg";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { AboutMeButton } from "./buttons";

export const Hero = () => {
  return (
    <div
      className={mergeClass(
        "w-full max-w-[1280px] h-screen mx-auto",
        "flex items-center",
      )}
    >
      <HeroBranding />
    </div>
  );
};

const HeroBranding = () => {
  return (
    <div
      className={mergeClass(
        "w-1/2 h-screen",
        "flex flex-col justify-center items-end gap-4",
      )}
    >
      <div className="w-4/5 flex flex-col gap-2.5">
        <div className="w-full mb-2">
          <AnimatedGradientText>
            <Image src={ShinyStar} alt="Shiny Star" className="inline h-4 w-4" />
            <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
            <span
              className="inline animate-gradient bg-gradient-to-r from-purple-400/75 via-pink-300 to-purple-400/75 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent"
            >
              Latest Blog Post
            </span>
            <IoIosArrowForward size={11} className="ml-1.5 my-auto" />
          </AnimatedGradientText>
        </div>
        <h1 className="text-5xl font-bold inline-flex gap-4 flex-wrap">
          <WhitenessText text="Limitless" />
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-sky-300 to-pink-400 [filter:drop-shadow(0_0px_12px_rgba(178,178,178,.3))] pb-1">Creativity</span>
        </h1>
        <h2 className="text-md font-light text-gray-500">
          I{"'"}m a Web developer and OSS contributor.
        </h2>
        <div className="w-full pt-5">
          <AboutMeButton />
        </div>
      </div>
    </div>
  );
};

const WhitenessText = ({ text }: { text: string }) => {
  return <span className="bg-clip-text text-transparent " style={{
    backgroundImage: "linear-gradient(180deg,color(display-p3 .9411764706 .9333333333 .9764705882/.8) 0%,color(display-p3 .8862745098 .9098039216 1/1) 100%)"
  }}>{text}</span>
}
