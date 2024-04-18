import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { player: string };
}) {
  return {
    title: `Nhật kí leo day của ${params.player}`,
    description: "Website Check Cost coded by Carolo Lương Khoa",
    referrer: "origin-when-cross-origin",
    keywords: [
      "Lương Khoa",
      "Carolo Lương Khoa",
      "Day bygone",
      "Check Cost",
      "Check Rewind",
      "Code by Lương Khoa",
    ],
    authors: [{ name: "Carolo Lương Khoa" }],
    creator: "Carolo Lương Khoa",
    publisher: "Carolo Lương Khoa",
    openGraph: {
      title: "Nhật kí leo day",
      description: "Website Check Cost coded by Carolo Lương Khoa",
      url: "https://check-rewind.vercel.app",
      siteName: "Check rewind",
      images: [
        {
          url: "https://i.ibb.co/JsjvtJn/www-check-rewind-vercel-app.png", // Must be an absolute URL
        },
      ],
      locale: "vi",
      type: "website",
    },
  };
}

export default function layoyt({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
