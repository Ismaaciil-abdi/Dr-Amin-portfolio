import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Header from "@/sections/header";
import Footer from "@/sections/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr.Amin Abdi",
  description: "Dentist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
