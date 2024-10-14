import localFont from "next/font/local";
import "./globals.css";

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

// Simplified layout, directly returning the body with custom fonts applied
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
