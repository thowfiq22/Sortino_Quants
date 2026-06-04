import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        width: 1200,
        height: 630,
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
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-text-primary antialiased flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-grow pt-20 md:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
