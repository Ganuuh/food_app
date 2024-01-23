"use client";
import { Footer } from "@/components/headerFooter/Footer";
import { Header } from "@/components/headerFooter/Header";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";
import { theme } from "@/theme/index";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <Header />
          {children}
          <Footer />
          <CssBaseline />
        </ThemeProvider>
      </body>
    </html>
  );
}
