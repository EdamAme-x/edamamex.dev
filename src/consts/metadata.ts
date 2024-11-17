import type { Metadata } from "next";

const url = "https://edamamex.dev";
const iconImage = "/favicon.webp";
const ogpCoverImage = "/ogp/cover.webp";
const siteName = "EdamAmex Portfolio";
const description = "A portfolio of EdamAmex";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: siteName,
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: "en-US",
    type: "website",
    images: ogpCoverImage,
  },
  icons: iconImage,
  publisher: `@EdamAme-x`,
  robots: "index, follow",
  creator: `@EdamAme-x`,
  keywords: ["amex2189", "EdamAme-x", "EdamAmex"],
};
