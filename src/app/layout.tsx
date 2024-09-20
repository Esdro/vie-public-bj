import React, {ReactNode} from "react";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themes/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";

const DM_SANS = DM_Sans({ subsets: ["latin"], weight: "400" });

export const metadata = {
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
    <html lang="fr" suppressHydrationWarning>
      <body className={DM_SANS.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className={"container mx-auto p-5 relative "}>
            <Header />
            <div className="mt-[95px] pb-16">{children}</div>
            <Footer />
            <Toaster />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
