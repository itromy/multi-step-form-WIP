import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

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
        <footer>
          <ul>
              <li><Link href="/your-info">Step 1</Link></li>
              <li><Link href="/add-ons">Step 2</Link></li>
              <li><Link href="/select-plan">Step 3</Link></li>
              <li><Link href="/summary">Step 4</Link></li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
