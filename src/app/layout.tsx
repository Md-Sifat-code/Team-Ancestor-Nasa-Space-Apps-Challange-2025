import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Nature Capsule - Closed-Loop Life Support for Mars",
  description:
    "A revolutionary bioregenerative life support system that transforms waste into life on Mars. Sustainable human habitation through closed-loop recycling at Jezero Crater.",
  keywords: [
    "Mars",
    "space sustainability",
    "life support",
    "bioregenerative",
    "closed-loop",
    "waste recycling",
    "Jezero Crater",
    "NASA",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
        {children}
      </body>
    </html>
  );
}
