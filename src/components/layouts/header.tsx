import LogoImage from '@/assets/logo.svg';

export const Header = () => {
    return (
        <header class={[
            "fixed top-0 left-0 right-0 z-50",
            "w-full h-14",
            "flex justify-center",
            "px-5 py-5"
        ]}
            style={{
                backdropFilter: "blur(24px) saturate(140%)"
            }}
        >
            <Logo />
        </header>
    )
}

const Logo = () => {
    return <div>
        <img src={LogoImage} alt="logo" width={24} height={24} class="filter grayscale-[0.1]" />
    </div>
}
