import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { Rubik } from 'next/font/google'
import Footer from "@/components/footer";

//👇 Configure our font object
const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={rubik.className}>
        <Header /> 
        <main className="w-full">
          <div className="mx-auto max-w-[1200px]">{children}</div>
        </main>
        <Footer />
        </body>
    </html>
  );
}
