import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "Backend Labs",
  description: "Senior Backend Engineer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
