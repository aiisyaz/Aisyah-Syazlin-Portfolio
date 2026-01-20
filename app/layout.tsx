import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { imageBasePath } from "./lib/config";
import ClientLayout from "./ClientLayout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://aiisyaz.github.io/Aisyah-Syazlin-Portfolio'
      : 'http://localhost:3000'
  ),
  title: "Aisyah Syazlin Portfolio",
  description: "Portfolio website of Aisyah Syazlin, a passionate developer.",
  openGraph: {
    title: "Aisyah Syazlin Portfolio",
    description: "Portfolio website of Aisyah Syazlin, a passionate developer.",
    images: [
      {
        url: `${imageBasePath}/og.webp`,
        width: 1200,
        height: 630,
        alt: "Aisyah Syazlin Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${imageBasePath}/og.webp`],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}