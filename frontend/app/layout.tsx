import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Todo app",
  description: "SSR Todo w/ Next.js and Node.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{ children }</body>
    </html>
  );
}
