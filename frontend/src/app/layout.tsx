"use client";
import { Footer } from "@/components/headerFooter/Footer";
import { Header } from "@/components/headerFooter/Header";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";
import { theme } from "@/theme/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <Header />
          <ToastContainer />
          {children}
          <Footer />
          <CssBaseline />
        </ThemeProvider>
      </body>
    </html>
  );
}
