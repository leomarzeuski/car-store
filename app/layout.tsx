import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
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
  title: {
    default: "Car Warriors LLC - Quality Pre-Owned Vehicles",
    template: "%s | Car Warriors LLC",
  },
  description:
    "Find your perfect ride at Car Warriors LLC. Quality pre-owned vehicles, transparent pricing, flexible financing, and exceptional customer service in Orlando, FL.",
  keywords: [
    "car dealership",
    "used cars",
    "pre-owned vehicles",
    "car warriors",
    "Orlando",
    "Florida",
    "financing",
    "auto sales",
  ],
  openGraph: {
    title: "Car Warriors LLC - Quality Pre-Owned Vehicles",
    description:
      "Find your perfect ride at Car Warriors LLC. Quality vehicles at competitive prices.",
    type: "website",
    locale: "en_US",
    siteName: "Car Warriors LLC",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
