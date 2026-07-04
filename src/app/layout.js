import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Geist } from "next/font/google";
const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://anil-backend-labs.vercel.app"),
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  title: {
    default: "Anil Kumar | Senior Backend Engineer",
    template: "%s | Anil Kumar",
  },

  description:
    "Senior Backend Engineer with 10+ years of experience building scalable backend systems using Node.js, AWS, Microservices, PostgreSQL, Redis and Cloud Native Architecture.",

  keywords: [
    "Anil Kumar",
    "Senior Backend Engineer",
    "Node.js",
    "Express.js",
    "AWS",
    "Microservices",
    "PostgreSQL",
    "Redis",
    "Docker",
    "REST API",
    "System Design",
    "Backend Developer",
  ],

  authors: [
    {
      name: "Anil Kumar",
    },
  ],

  creator: "Anil Kumar",

  openGraph: {
    title: "Anil Kumar | Senior Backend Engineer",

    description:
      "Senior Backend Engineer specializing in Node.js, AWS, Microservices and System Design.",

    url: "https://anil-backend-labs.vercel.app",

    siteName: "Anil Backend Labs",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anil Kumar - Senior Backend Engineer",
      },
    ],

    locale: "en_US",

    type: "website",
  },
  twitter: {
    card: "summary_large_image",

    title: "Anil Kumar | Senior Backend Engineer",

    description: "Node.js • AWS • Microservices • System Design",

    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
