import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";



export const metadata: Metadata = {
  title: "Find Machenic",
  description: "Develop By Shailesh Kumar {https://www.linkedin.com/in/shailesh921}",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
