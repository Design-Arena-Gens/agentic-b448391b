import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-calsans" });

export const metadata: Metadata = {
  title: "LumaSphere — Illuminate Your Digital Future",
  description:
    "LumaSphere is the creative studio merging design, motion, and strategy to craft remarkable digital experiences that convert."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${manrope.variable}`}>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
