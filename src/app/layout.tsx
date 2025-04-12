import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import "swiper/css";
import "swiper/css/navigation";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Delta"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
        <head>
        {/* Adiciona o CDN do Swiper */}
        <link
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
        <a
          href="https://wa.me/555192096630" // Substitua pelo número de telefone desejado
          target="_blank"
          className="whatsapp-button"
        >
          <img src="/wpp.png" alt="WhatsApp" className="w-16 h-16 bg-green-500" />
        </a>
      </body>
    </html>
  );
}
