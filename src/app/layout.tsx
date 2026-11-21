import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Baltazar Salerno | Frontend Developer, Full Stack & Software Engineer",
    template: "%s | Baltazar Salerno",
  },
  description:
    "Professional portfolio of Baltazar Salerno. Frontend Developer, Full Stack Developer, and Software Engineer specialized in JavaScript, Python, React, Node.js, MongoDB, PostgreSQL, and Artificial Intelligence.",
  keywords: [
    "Baltazar Salerno",
    "Frontend Developer",
    "Full Stack Developer",
    "Software Engineer",
    "JavaScript",
    "TypeScript",
    "Python",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Artificial Intelligence",
    "AI",
    "Portfolio",
  ],
  authors: [{ name: "Baltazar Salerno", url: siteUrl }],
  creator: "Baltazar Salerno",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Baltazar Salerno | Portfolio",
    title: "Baltazar Salerno | Frontend Developer, Full Stack & Software Engineer",
    description:
      "Professional portfolio of Baltazar Salerno. Web development with JavaScript, Python, React, Node.js, MongoDB, PostgreSQL, and Artificial Intelligence.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baltazar Salerno | Frontend Developer, Full Stack & Software Engineer",
    description:
      "Professional portfolio of Baltazar Salerno. JavaScript, Python, React, Node.js, MongoDB, PostgreSQL, and AI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#06080f] text-zinc-100 font-sans selection:bg-sky-500/30 selection:text-sky-100">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
