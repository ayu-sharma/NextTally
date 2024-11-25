
import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";
// Import custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  weight: "100 900",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  weight: "100 900",
  variable: "--font-geist-mono",
});

// Define metadata like before
export const metadata = {
  title: "My Next.js App",
  description: "A Next.js application",
};

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
// });

const montserrat = Montserrat({
  weight: ['200', '300', '400', '500', '600', '700' , '800'],
  subsets: ['latin']
})

// Simplified layout, directly returning the body with custom fonts applied
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`antialiased ${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}
