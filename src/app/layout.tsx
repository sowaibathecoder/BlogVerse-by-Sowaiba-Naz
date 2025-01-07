import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlogVerse By SownSheikh",
  description: "Explore the realm of creativity and knowledge, brought to you by SownSheikh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navbar */}
        <NavBar />
        
        {/* Main Content and Video Background */}
        <div className="w-full h-full relative">
          <video
            className="video-background"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/background_video.mp4" type="video/mp4" />
            {/* Browser does not support the video tag. */}
          </video>

          <div className="relative z-10 min-h-screen">
            {children}
          </div>
        </div>
          <Footer />
      </body>
    </html>
  );
}
