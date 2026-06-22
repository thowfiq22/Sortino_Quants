import type { Metadata } from "next";

const siteName = "Sortino Quants";
const socialImage = {
  url: "/og-image.png",
  width: 1024,
  height: 1024,
  alt: "Sortino Quants - Position Yourself on the Efficient Frontier",
};

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      images: [socialImage],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage.url],
    },
  };
}
