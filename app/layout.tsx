import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import { cn } from "@/lib/utils";

const IMBPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "ArtIQnova",
  description:
    "ArtIQnova is an innovative AI-powered design platform that revolutionizes creativity, making graphic design accessible to everyone with intelligent features and intuitive tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#624cf5" },
      }}
    >
      <html lang="en">
        <body className={cn("font-IBMPlex", IMBPlex.variable)}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
