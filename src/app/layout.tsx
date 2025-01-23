import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Multi Step Form",
  description: "Coding Challenge by Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
