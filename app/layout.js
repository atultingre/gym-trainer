import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Layout from "./_components/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Radheshyam Jogdand",
  description: "This app is created by Atul Tingre.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>
            {children}
            <ToastContainer />
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
