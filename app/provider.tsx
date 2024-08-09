"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
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
