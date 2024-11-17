"use client";
import { mergeClass } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/public/favicon.webp";
import { socialLinks } from "@/consts/social-links";
import { headerLinks } from "@/consts/header";
import { usePathname } from "next/navigation";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { memo } from "react";

export const Header = () => {
  const { scrollY } = useScroll();
  const controls = useAnimation();

  const floatHeaderVariants = {
    initial: {
      y: 20,
    },
    float: {
      y: 0,
    },
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      controls.start("float");
    } else {
      controls.start("initial");
    }
  });

  return (
    <motion.header
      className={mergeClass(
        "fixed top-0 left-0 right-0 z-50",
        "w-full max-w-[1280px] h-14",
        "flex justify-between items-center",
        "px-10 py-5 mx-auto",
      )}
      initial="initial"
      variants={floatHeaderVariants}
      animate={controls}
    >
      <HeaderContents />
    </motion.header>
  );
};

const HeaderContents = memo(() => {
  return (
    <>
      <Logo />
      <HeaderLinks />
      <SocialLinks />
    </>
  );
});

HeaderContents.displayName = "HeaderContents";

const Logo = () => {
  return (
    <Link href="/" prefetch className="mr-[60px]">
      <Image
        src={LogoImage}
        alt="logo"
        width={32}
        height={32}
        className="filter grayscale-[0.1]"
        style={{
          filter: "drop-shadow(0 0 1rem #ffffff99)",
        }}
      />
    </Link>
  );
};

const HeaderLinks = () => {
  const path = usePathname();

  return (
    <div
      className="flex h-[40px] gap-1 px-1 relative
     py-2 justify-center items-center bg-[#0000004] border border-[#3f3f3f] rounded-[1rem]"
      style={{
        boxShadow:
          "0px 2px 4px rgba(0,0,0,.12),0px 8px 12px rgba(0,0,0,.08),0px 8px 16px rgba(0,0,0,.08)",
        backdropFilter: "blur(24px) saturate(140%)",
      }}
    >
      <div 
        className="left-1/2 top-0 w-[300px] center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2" 
        style={{
          background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.0) 0%, rgba(143, 143, 143, 0.97) 50%, rgba(0, 0, 0, 0) 100%)"
        }}
      ></div>
      {headerLinks.map(({ url, icon: Icon, title, size }) => {
        return (
          <Link
            key={url}
            href={url}
            prefetch
            className={mergeClass(
              "inline-flex items-center gap-[0.5rem] h-[30px] px-[1rem] py-[0.25rem] rounded-[0.75rem]",
              "border border-[#00000000]",
              path === url
                ? "bg-[#9595954d] !border-[#515156]"
                : "hover:bg-[#9595951c] hover:border-[#515156cc]",
              "transition-all duration-300",
            )}
          >
            <Icon size={size || 18} />{" "}
            <span className="text-[0.875rem] px-[0.125rem] pb-[1px]">
              {title}
            </span>
          </Link>
        );
      })}
      <BoxGradient />
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map(({ url, icon: Icon, alt }) => {
        return (
          <Link
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title={alt}
          >
            <Icon size={20} />
          </Link>
        );
      })}
    </div>
  );
};

const BoxGradient = () => {
  return (
    <div className="insert-0 absolute inset-x-0 bottom-0 size-full [border-radius:1rem] px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff11] transform-gpu transition-all duration-300 ease-in-out pointer-events-none">
    </div>
  );
};
