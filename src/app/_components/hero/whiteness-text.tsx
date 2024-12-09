export const WhitenessText = ({ text }: { text: string }) => {
    return <span className="bg-clip-text text-transparent " style={{
        backgroundImage: "linear-gradient(180deg,color(display-p3 .9411764706 .9333333333 .9764705882/.8) 0%,color(display-p3 .8862745098 .9098039216 1/1) 65%, #000000 100%)"
    }}>{text}</span>
}
