"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"
import { useEffect } from "react";
import 'aos/dist/aos.css';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        once: false
      });
    });
}, []);
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
