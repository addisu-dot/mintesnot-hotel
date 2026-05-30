import type { Metadata } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";

import { AppShell } from "@/components/app-shell";
import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mintesnot Hotel | Your Home in Durame",
    template: "%s | Mintesnot Hotel",
  },
  description:
    "A clean, breezy stay in the heart of Durame. Comfortable rooms, local dining, and warm hospitality at Mintesnot Hotel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden font-sans">
        <Providers>
          <AppShell>{children}</AppShell>
          <Toaster position="top-center" richColors closeButton />
        </Providers>
      </body>
    </html>
  );
}
