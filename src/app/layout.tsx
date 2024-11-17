import { Header } from "@/layouts/header";
import "./globals.css";

export { metadata } from "@/consts/metadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-[200vh]">
        <Header />
        {children}
      </body>
    </html>
  );
}
