import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Web Content Extractor - AI驱动的网页内容提取工具",
  description: "通过智能算法提取网页的核心内容，移除广告和干扰元素，为AI模型提供清晰的输入数据。",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className={`${inter.variable} font-sans antialiased`}>
      <body className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
