import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'popcorn & passion',
  description: 'enjoy movies',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/logo.png",
        href: "/assets/logo.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/logo.png",
        href: "/assets/logo.png",
      }
    ]
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-secondary`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
