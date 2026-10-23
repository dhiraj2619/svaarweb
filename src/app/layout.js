import { Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import Preloader from "./components/Preloader";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "SVAAR | Process Engineering, Pilot Plants & Scale-Up",
  description:
    "SVAAR engineers processes and enables scale — from pilot plants to industrial production.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Preloader />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
