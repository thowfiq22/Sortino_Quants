import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sortino Quants | Position Yourself on the Efficient Frontier",
  description:
    "Premium trading education and trading community platform focused on quantitative thinking, disciplined risk management, and market structure.",
  keywords: [
    "trading education",
    "quantitative analysis",
    "risk management",
    "FTMO mentor",
    "index futures",
    "options trading",
    "gold trading",
    "Sortino Quants",
    "trading community UK",
  ],
  authors: [{ name: "Sortino Quants" }],
  creator: "Sortino Quants",
  metadataBase: new URL("https://sortinoquants.com"),
  openGraph: {
    title: "Sortino Quants | Position Yourself on the Efficient Frontier",
    description:
      "Premium trading education and community platform focused on quantitative thinking, disciplined risk management, and market structure.",
    url: "https://sortinoquants.com",
    siteName: "Sortino Quants",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 1024,
        alt: "Sortino Quants – Position Yourself on the Efficient Frontier",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sortino Quants | Position Yourself on the Efficient Frontier",
    description:
      "Premium trading education and community platform focused on quantitative thinking, disciplined risk management, and market structure.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${jetBrainsMono.variable} dark`}>
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-text-primary antialiased flex flex-col min-h-screen font-sans">
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Header />
        <main id="main-content" className="flex-grow pt-20 md:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
