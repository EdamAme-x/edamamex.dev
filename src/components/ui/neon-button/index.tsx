/**
 * @noskid
 */
import { cn } from "@/lib/utils";
import css from "./index.module.css"

export const NeonButton = ({ className, children, ...props }: React.ComponentProps<"button">) => {
    return (
        <button
            className={cn(
                css.neonButton,
                className
            )}
            {...props}
        >
            <div
                className="left-1/2 top-0 w-[300px] center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
                style={{
                    background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.0) 0%, rgba(143, 143, 143, 0.99) 50%, rgba(0, 0, 0, 0) 100%)"
                }}
            ></div>
            {children}
            <div className="insert-0 absolute inset-x-0 bottom-0 size-full [border-radius:0.7rem] px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff22] transform-gpu transition-all duration-300 ease-in-out pointer-events-none"></div>
        </button>
    );
};
