import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "myBlueprint x Scotiabank 2025 Scholarships",
  description: "Celebrating 16 Outstanding Students",
  icons: {
    icon: "https://i.imgur.com/5LyeXPx.png",
    shortcut: "https://i.imgur.com/5LyeXPx.png",
    apple: "https://i.imgur.com/5LyeXPx.png",
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