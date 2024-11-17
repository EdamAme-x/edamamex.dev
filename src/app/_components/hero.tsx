import { mergeClass } from "@/lib/utils"
import { FlipWords } from "@/components/ui/flip-words"
import { Spotlight } from "@/components/ui/spotlight"

const words = ["Impact", "Ideas", "Vision", "Style"]

export const Hero = () => {
    return <div className={mergeClass(
        "w-full max-w-[1024px] h-screen mx-auto",
        "flex flex-col justify-center items-center gap-4"
    )}>
        <Spotlight fill="#CDF3FFaa" />
        <h1 className="flex flex-col items-center" style={{
            filter: "drop-shadow(0 0 1rem #aaaaaa99)",
        }}>
            <span className="font-regular text-4xl bg-clip-text text-transparent italic" style={{
                backgroundImage: "linear-gradient(135deg, #CDF3FF 0%, color(display-p3 .8862745098 .9098039216 1/1) 100%)",
            }}>Limitless</span> 
            <FlipWords words={words} className="font-bold text-[12rem] mt-[-70px] bg-clip-text text-transparent" style={{
                backgroundImage: "linear-gradient(135deg, #CDF3FF 0%, #CCF3FB 33.33%, #EF84AF 66.67%, #D683A6 100%)",
            }} duration={3000} />
        </h1>
        <h2 className="text-xl font-regular text-[#b2b2b2]">I am a developer and OSS contributor.</h2>
    </div>
}
