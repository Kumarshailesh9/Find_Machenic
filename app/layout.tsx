import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Find Machenic | Find Mechanic Near You – Doorstep Car Service",
  description:
    "Find Machenic helps you find trusted car mechanics near you. Doorstep car service with free pickup & drop under 15km in Delhi, Noida, Gurugram & NCR.",
  keywords: [
    "find machenic",
    "find mechanic",
    "mechanic near me",
    "car mechanic near me",
    "doorstep car service",
    "car service Delhi NCR"
  ],
  openGraph: {
    title: "Find Machenic – Trusted Mechanics Near You",
    description:
      "Find Machenic is a platform to find mechanics near you. Book doorstep car service with free pickup & drop under 15km.",
    url: "https://find-machenic.vercel.app/",
    siteName: "Find Machenic",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
