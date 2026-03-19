import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agent Skills Demo",
  description:
    "An interactive walkthrough showing how agent skills improve coding workflows",
};

const steps = [
  { href: "/", label: "Intro" },
  { href: "/learn", label: "1. What Are Skills?" },
  { href: "/before", label: "2. The Problem" },
  { href: "/try-without", label: "3. Try Without Skills" },
  { href: "/install", label: "4. Install Skills" },
  { href: "/try-with", label: "5. Try With Skills" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="border-b border-border bg-surface sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-6 overflow-x-auto">
            <span className="font-semibold text-accent shrink-0">
              Skills Demo
            </span>
            <div className="flex gap-1">
              {steps.map((step) => (
                <Link
                  key={step.href}
                  href={step.href}
                  className="text-sm px-3 py-1.5 rounded-md text-muted hover:text-foreground hover:bg-accent-light transition-colors whitespace-nowrap"
                >
                  {step.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border py-6 text-center text-sm text-muted">
          Built by{" "}
          <a
            href="https://www.baufest.com"
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Baufest
          </a>{" "}
          to demonstrate the power of agent skills.
        </footer>
      </body>
    </html>
  );
}
