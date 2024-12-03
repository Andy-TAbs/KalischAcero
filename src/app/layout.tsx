import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kalisch Acero",
  description: "Pagina principal de Kalisch Acero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
