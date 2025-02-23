import type { Metadata } from "next";
import { Montserrat, Unbounded } from "next/font/google";
import { Layout } from "@/components/layout/Layout";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
});

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
});

export const metadata: Metadata = {
  title: "Solar Studio - Главная",
  description: "Solar Studio - совершенство в каждом проекте",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${unbounded.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}