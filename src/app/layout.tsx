import type { Metadata } from "next";
import "./globals.css";
import { Syne } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Society of Robotics - DTU",
  description:
    "The largest robotic society of DTU, fostering innovation and collaboration in robotics research and development.",
  keywords:
    "robotics, society, DTU, technology, innovation, research, development",
  authors: [{ name: "Anuj Joshi", url: "https://anujjoshi.netlify.app" }],
  themeColor: "#272727",
  openGraph: {
    title: "Society of Robotics - DTU",
    description:
      "Join the largest robotic society at DTU and explore exciting opportunities in robotics.",
    siteName: "Society of Robotics - DTU",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Society of Robotics Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    title: "Society of Robotics - DTU",
    description:
      "The largest robotic society of DTU, promoting robotics innovation.",
  },
  icons: {
    icon: {
      url: "/logo.png",
    },
  },
};

const syne = Syne({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative ${syne.className}`}>
        <Navbar />
        {children}
        <div className="text-xl w-[80vw] md:text-3xl leading-8 text-center font-extrabold fixed select-none -z-10 left-1/2 translate-x-[-50%] bottom-10 opacity-5 text-stroke">
          SOCIETY OF ROBOTICS - DTU
        </div>
        <Footer />
      </body>
    </html>
  );
}
