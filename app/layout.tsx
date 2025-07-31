import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TopHeader } from "@/components/TopHeader";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Western Mega College - Excellence in Education",
  description:
    "Leading educational institution providing quality higher education in +2 and diploma programs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopHeader />
        <Header />
        <main className="pt-32 md:pt-32">{children}</main>
        <Footer />
        <WhatsAppButton phoneNumber="9857071252" />
      </body>
    </html>
  );
}
