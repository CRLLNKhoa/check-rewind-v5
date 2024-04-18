import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { Rubik } from 'next/font/google'
import Footer from "@/components/footer";
import { ClerkProvider } from '@clerk/nextjs'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NoticPopup from "@/components/noticPopup";
//👇 Configure our font object
const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Check Cost DBG",
  description: "Website Check Cost coded by Carolo Lương Khoa",
  referrer: "origin-when-cross-origin",
  keywords: ["Lương Khoa", "Carolo Lương Khoa", "Day bygone","Check Cost", "Check Rewind","Code by Lương Khoa"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="vi">
      <body className={rubik.className}>
        <Header /> 
        <main className="w-full">
          <div className="mx-auto max-w-[1024px]">{children}</div>
        </main>
        <Footer />
        <ToastContainer />
        <NoticPopup />
        </body>
    </html>
    </ClerkProvider>
  );
}
