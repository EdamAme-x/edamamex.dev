import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import type { IconType } from "react-icons";

export const socialLinks = [
  {
    url: "https://x.com/amex2189",
    icon: FaXTwitter,
    alt: "X",
  },
  {
    url: "https://github.com/EdamAme-x",
    icon: FaGithub,
    alt: "Github",
  },
  {
    url: "https://evex.land",
    icon: FaDiscord,
    alt: "Discord",
  },
] satisfies Readonly<{
  url: string;
  icon: IconType;
  alt: string;
}[]>;
