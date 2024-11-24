import { Sparkles } from "@/components/ui/sparkles";
import { Hero } from "./_components/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Sparkles
        background="transparent"
        className="fixed top-0 z-[-1] w-screen h-screen"
        maxSize={1.5}
        speed={2}
        particleDensity={5}
        particleColor={["#7E59FE", "#FF8C00"]}
      />
    </>
  );
}
