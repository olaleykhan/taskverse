import type { Metadata } from "next";
import "./tw.css";

export const metadata: Metadata = {
  title: "Taskverse",
  description: "Collaborate with teammates in real time on a To-Do list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
