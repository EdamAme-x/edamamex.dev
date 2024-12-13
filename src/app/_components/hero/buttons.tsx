import { ChevronRight } from "lucide-react";
import css from "./buttons.module.css";
import { mergeClass } from "@/lib/utils";
import { WhitenessText } from "./whiteness-text";
import type { IconType } from "react-icons";

export function AboutMeButton() {
  return (
    <a href="/about" className={mergeClass("group relative inline-flex gap-1.5 items-center py-2.5 px-5 rounded-full", css.aboutMeButton)} style={{
      boxShadow: "inset 0 0 10px #ffffff23"
    }}>
      <span className="text-sm font-light">
        <WhitenessText text="About me" />
      </span>
      <ChevronRight size={14} className="group-hover:translate-x-1 transition-all" />
      <div className="insert-0 absolute inset-x-0 bottom-0 size-full [border-radius:inherit] px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff22] transform-gpu transition-all duration-300 group-hover:shadow-[inset_0_-8px_10px_#ffffff33] ease-in-out pointer-events-none">
      </div>
    </a>
  );
}

export function SocialLinkButton({ url, Icon, alt }: { url: string, Icon: IconType; alt: string }) {
  return <a href={url} title={alt} className="size-[32px] relative p-[7px] rounded-md">
      <Icon className="size-[18px]" />
      <div className="insert-0 absolute inset-x-0 bottom-0 size-full [border-radius:inherit] px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff19] transform-gpu transition-all duration-300 group-hover:shadow-[inset_0_-8px_10px_#ffffff33] ease-in-out pointer-events-none">
      </div>
  </a>
}
