import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Festival Sepela 2025",
  description: "Festival organisé par la jeunesse de l'église missionnaire Temps de la Moisson - 30-31 Août 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="antialiased font-sans"
      >
        {children}
      </body>
    </html>
  );
}
