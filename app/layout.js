import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Layout from "./_components/Layout";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

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
          <AuthProvider>
            <Layout>
              {children}
              <ToastContainer />
            </Layout>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
