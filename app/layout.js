import Script from "next/script";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-oswald",
});

export const metadata = {
  metadataBase: new URL("https://renterclarify.com"),
  title: "RenterClarify — Understand Your Lease in Plain English",
  description:
    "Paste any confusing lease clause and get a clear, plain-English explanation instantly. Built for renters, not lawyers.",
  openGraph: {
    title: "RenterClarify — Understand Your Lease in Plain English",
    description:
      "Paste any confusing lease clause and get a clear, plain-English explanation instantly. Built for renters, not lawyers.",
    url: "https://renterclarify.com",
    siteName: "RenterClarify",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RenterClarify — Understand Your Lease in Plain English",
    description:
      "Paste any confusing lease clause and get a clear, plain-English explanation instantly. Built for renters, not lawyers.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} antialiased`}
      >
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6XQBS3CM0C"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6XQBS3CM0C');
            `,
          }}
        />
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4127088921668032"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
