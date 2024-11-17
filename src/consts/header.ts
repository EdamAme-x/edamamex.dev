import { GrHomeRounded } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { RiLayoutGridLine } from "react-icons/ri";
import { LuBookMarked } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import { IconType } from "react-icons";

export const headerLinks = [
    {
        url: "/",
        icon: GrHomeRounded,
        title: "Home",
        size: 14
    },
    {
        url: "/about",
        icon: CgProfile,
        title: "About"
    },
    {
        url: "/work",
        icon: RiLayoutGridLine,
        title: "Work"
    },
    {
        url: "/blog",
        icon: LuBookMarked,
        title: "Blog"
    },
    {
        url: "/contact",
        icon: MdMailOutline,
        title: "Contact"
    }
] satisfies Readonly<{
    url: `/${string}`;
    icon: IconType;
    title: string;
    size?: number;
}[]>
