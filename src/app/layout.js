import { Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

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
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
