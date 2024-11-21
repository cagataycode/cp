import Navbar from "../app/components/Navbar";
import { cn } from "../app/lib/utils";
import { Inter } from "next/font/google";

import "../app/globals.css";
import { Toaster } from "./components/ui/Toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CP",
  description: "CP.",
};

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white text-slate-900 antialiased light",
        inter.className
      )}
    >
      <body className="min-h-screen pt-12 bg-slate-50 antialiased">
        <Navbar />
        {authModal}

        <div className="container max-w-7xl mx-auto h-full pt-12">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
