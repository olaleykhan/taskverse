import type { Metadata } from "next";
import "./tw.css";

export const metadata: Metadata = {
  title: "Taskverse",
  description: "Collaborate with teammates in real time on a todo list",
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
