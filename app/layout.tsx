import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TypeNovel – Custom Typing Practice with Your Favorite Books",
  description: "Upload any book or text and practice typing with real-time WPM tracking and progress analytics."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9e0bf794-f8bc-4c14-8ed4-d461795eae6e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
