import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Geist } from "next/font/google";
const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Backend Labs",
  description: "Senior Backend Engineer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
