import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tahmid Jihan | Web Developer & Creative Problem Solver",
  description: "Building digital experiences that combine technical precision with creative flair. Passionate about solving complex problems through clean, efficient code and intuitive user interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-zinc-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
