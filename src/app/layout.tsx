import type { Metadata } from "next";
import "./globals.css";
import { LenisSmoothScroll } from "@/components/LenisSmoothScroll";

export const metadata: Metadata = {
  title: "Tahmid Jihan | Full-Stack Web Developer & Entrepreneur",
  description: "Building high-performance, scalable digital solutions with a proven track record of working with international companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        <link href="https://fonts.cdnfonts.com/css/prata-2" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-black text-white selection:bg-[#914110] selection:text-black antialiased">
        <LenisSmoothScroll>
          {children}
        </LenisSmoothScroll>
      </body>
    </html>
  );
}
