import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lebrun S.A. | Tires, Batteries & Vehicles in Haiti",
  description:
    "Lebrun S.A. is the automotive arm of the Lebrun group in Haiti. Under its Tirezone banner, the company operates a network of stores specialized in tires and batteries, offering trusted brands, expert advice and fast fitting service. Lebrun S.A. is also the founder of Caribe Motors S.A. and Autobiz S.A., extending the group's reach into new vehicle distribution and vehicle sales. Quality products, fair pricing and dependable service are what keep Haitian motorists moving.",
  icons: {
    icon: "/logos/lebrun.png",
    apple: "/logos/lebrun.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
