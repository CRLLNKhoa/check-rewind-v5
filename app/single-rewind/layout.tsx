import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Check Cost DBG",
  description: "Website Check Cost coded by Carolo Lương Khoa",
  referrer: "origin-when-cross-origin",
  keywords: ["Lương Khoa", "Carolo Lương Khoa", "Day bygone","Check Cost", "Check Rewind"],
  authors: [{ name: "Carolo Lương Khoa" }],
  creator: "Carolo Lương Khoa",
  publisher: "Carolo Lương Khoa",
  openGraph: {
    title: "Check Cost DBG",
    description: "Website Check Cost coded by Carolo Lương Khoa",
    url: "https://check-rewind.vercel.app",
    siteName: "Check rewind",
    images: [
      {
        url: "https://i.ibb.co/bPt4cgf/seo.png", // Must be an absolute URL
      },
    ],
    locale: "vi",
    type: "website",
  },
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
