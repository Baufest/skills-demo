import type { Metadata } from "next";
import {
  Montserrat,
  Barlow_Semi_Condensed,
  JetBrains_Mono,
} from "next/font/google";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const barlowSemiCondensed = Barlow_Semi_Condensed({
  variable: "--font-barlow",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agent Skills Demo",
  description:
    "An interactive walkthrough showing how agent skills improve coding workflows",
};

const steps = [
  { href: "/", label: "Home" },
  { href: "/start", label: "1" },
  { href: "/exercise-2a", label: "2a" },
  { href: "/exercise-2b", label: "2b" },
  { href: "/exercise-3a", label: "3a" },
  { href: "/exercise-3b", label: "3b" },
  { href: "/faq", label: "FAQ" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${barlowSemiCondensed.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="border-b bg-card sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-6 overflow-x-auto">
            <Link href="/" className="font-semibold text-primary shrink-0">
              Skills Demo
            </Link>
            <div className="flex gap-1">
              {steps.map((step) => (
                <Link
                  key={step.href}
                  href={step.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {step.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <main className="flex-1">{children}</main>
        <footer className="border-t py-6 text-center text-sm text-muted-foreground">
          Built by{" "}
          <a
            href="https://www.baufest.com"
            className="text-primary hover:underline"
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
