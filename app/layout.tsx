import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/footer";
import Headwork from "./components/headwork";


// Define custom fonts using local font files
const geistSans = localFont({
  src: "/fonts/GeistVF.woff", // Adjust the path to start from public directory
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "/fonts/GeistMonoVF.woff", // Adjust the path to start from public directory
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Define metadata for the site
export const metadata = {
  title: "Hamza's Blog",
  description: "A blog about Next.js, programming, and more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    
    <html lang="en">
  
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
      <Headwork />
        <div className="max-w-3xl mx-auto p-4">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
