"use client";
import { mergeClass } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import ShinyStar from "./shiny-star.svg";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { AboutMeButton, SocialLinkButton } from "./buttons";
import { WhitenessText } from "./whiteness-text";
import { socialLinks } from "@/consts/social-links";
import { Object } from "./object";

export const Hero = () => {
  return (
    <div
      className={mergeClass(
        "w-full max-w-[1280px] h-screen mx-auto",
        "flex items-center",
      )}
    >
      <HeroBranding />
      <div className="w-1/2 h-full flex justify-end items-center">
          <Object />
      </div>
    </div>
  );
};

const HeroBranding = () => {
  return (
    <div
      className={mergeClass(
        "w-1/2 h-full",
        "flex flex-col justify-center items-end gap-4",
      )}
    >
      <div className="w-4/5 flex flex-col gap-2.5">
        <div className="w-full mb-2">
          <AnimatedGradientText>
            <Image src={ShinyStar} alt="Shiny Star" className="inline h-4 w-4" />
            <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300/50" />{" "}
            <span
              className="inline text-xs py-[1px] animate-gradient bg-gradient-to-r from-purple-400/75 via-pink-300 to-purple-400/75 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent"
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
          I{"'"}m Web developer and OSS contributor.
        </h2>
        <div className="w-full mt-10 flex items-center">
          <AboutMeButton />
          <div className="flex items-center gap-4 ml-44">
            {
              socialLinks.map(({ url, icon: Icon, alt }) => {
                return <SocialLinkButton key={url} url={url} Icon={Icon} alt={alt} />;
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};
