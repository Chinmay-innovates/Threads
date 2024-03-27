import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

export const metadsa = {
  title: "Threads",
  description: "A Nextjs13 Meta Threads Application",
};

const inter = Inter({ subsets: ["latin"] });
export default function Rootlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
