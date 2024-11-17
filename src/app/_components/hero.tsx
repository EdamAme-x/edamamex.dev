import { mergeClass } from "@/lib/utils"

export const Hero = () => {
    return <div className={mergeClass(
        "w-full max-w-[1280px] h-screen mx-auto",
        "flex flex-col justify-center items-center gap-4"
    )}>

    </div>
}
