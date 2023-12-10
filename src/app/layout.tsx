import { Footer, Navbar } from "@/components/global";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const montserrat = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Muhammad Putra Age",
  description: "Muhammad Putra Age's Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="body" className={montserrat.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
