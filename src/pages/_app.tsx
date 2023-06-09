import type { AppProps } from "next/app";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { Toaster } from "../components/ui/toaster";
import "../styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${fontSans.style.fontFamily};
        }
      `}</style>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <Component {...pageProps} />
        <Toaster />
      </ThemeProvider>
    </>
  );
};

export default App;
