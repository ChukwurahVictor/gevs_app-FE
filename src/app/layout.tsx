import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ReactQueryProvider } from "./react-query-provider";
import { Toaster } from "react-hot-toast";

const manrope = Manrope({ subsets: ["latin"], weight: '800' });

export const metadata: Metadata = {
  title: "GEVS",
  description: "An Online Voting System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              style: {
                background: "green",
                color: "white",
              },
            },
            error: {
              style: {
                background: "#ab0000",
                color: "white",
              },
            },
          }}
        />
        <ReactQueryProvider>
          <Providers>{children}</Providers>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
