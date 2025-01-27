import React, {ReactNode} from "react";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themes/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";
import { Metadata } from "next";

const DM_SANS = DM_Sans({ subsets: ["latin"], weight: "400" });

export const metadata : Metadata = {
  title: "Vie Publique Bénin",
  description:
    "Vie Publique Bénin, la transparence dans l'action gouvernementale et la vie publique en République" +
    " du Bénin ",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className="h-full">
      <body className={`${DM_SANS.className} flex flex-col h-full`} >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          
          <Header />
          <main className={"flex-grow container mx-auto h-auto p-5 "}>
           {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
