import { ChevronRight } from "lucide-react";
import css from "./buttons.module.css";
import { mergeClass } from "@/lib/utils";

export function AboutMeButton() {
  return (
    <a href="/about" className={mergeClass("group relative inline-flex gap-1.5 items-center py-2.5 px-5 bg-black rounded-full", css.aboutMeButton)} style={{
      boxShadow: "inset 0 0 10px #ffffff23"
    }}>
      <span className="text-sm font-light">
        About me
      </span>
      <ChevronRight size={14} className="group-hover:translate-x-1 transition-all" />
      <div className="insert-0 absolute inset-x-0 bottom-0 size-full [border-radius:inherit] px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff22] transform-gpu transition-all duration-300 group-hover:shadow-[inset_0_-8px_10px_#ffffff33] ease-in-out pointer-events-none">
      </div>
    </a>
  );
}