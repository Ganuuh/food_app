"use client";
import { Footer } from "@/components/headerFooter/Footer";
import { Header } from "@/components/headerFooter/Header";
import { CssBaseline, ThemeProvider } from "@mui/material";
import AppRouter from "next/dist/client/components/app-router";
import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={{}}>
          <Header />
          {children}
          <Footer />
          <CssBaseline />
        </ThemeProvider>
      </body>
    </html>
  );
}
