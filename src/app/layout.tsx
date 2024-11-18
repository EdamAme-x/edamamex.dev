import { Header } from "@/layouts/header";
import Head from "next/head";
import "./globals.css";

export { metadata } from "@/consts/metadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="use-credentials"
        />
      </Head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
