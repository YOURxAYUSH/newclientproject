import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Secure Future Skill Academy",
  description: " Secure Future Skill Academy is a soft-skills training institute which provide online courses for learning.",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <Header/>
        <Navbar/>
        
       
       
        <div className="min-h-[100vh]">
        
        
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
