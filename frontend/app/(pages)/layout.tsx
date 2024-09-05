import Providers from "../components/Providers";
import "../globals.css";
import type { Metadata } from "next";

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
      <body>
      <Providers>{ children }</Providers>
      </body>
    </html>
  );
}
