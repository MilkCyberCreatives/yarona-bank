import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import MainHeader from "@/components/MainHeader";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "YA-RONA Co-operative Bank SA",
    template: "%s | YA-RONA Co-operative Bank SA",
  },
  description:
    "A Bank by the People, for the People. Changing lives and empowering communities across South Africa with accounts, savings, investments, and responsible loans.",
  openGraph: {
    title: "YA-RONA Co-operative Bank SA",
    description:
      "Proudly Black-owned co-operative bank. Open an account for only R50. Join the financial revolution.",
    url: SITE_URL,
    siteName: "YA-RONA Co-operative Bank SA",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "YA-RONA Co-operative Bank SA" }],
    locale: "en_ZA",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
  alternates: { canonical: SITE_URL },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* add the classes here instead of using @apply in CSS */}
      <body className="bg-white text-neutral-900 antialiased">
        <TopBar />
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
