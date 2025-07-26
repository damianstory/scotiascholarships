import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "myBlueprint x Scotiabank 2025 Scholarships",
  description: "Celebrating 16 Outstanding Students",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}