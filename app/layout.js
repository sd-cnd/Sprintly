import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import "react-day-picker/dist/style.css";
import { Toaster } from "sonner";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sprintly",
  description: "Team management Application",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: shadesOfPurple,
        variables: {
          colorPrimary: "#3b82f6",
          colorBackground: "#1a202c",
          colorInputBackground: "#2D3748",
          colorInputText: "#F3F4F6",
        },
        elements: {
          formButtonPrimary: "bg-purple-600 hover:bg-purple-700 text-white",
          card: "bg-gray-800",
          headerTitle: "text-blue-400",
          headerSubtitle: "text-gray-400",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.className} overflow-y-scroll`}>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />
            <footer className="border-t py-12">
              <div className="container mx-auto px-4 text-center text-gray-400">
                <p>
                  <a
                    href="https://github.com/sd-cnd/Sprintly"
                    target="_blank"
                    className="space-x-2 text-xl text-blue-600 hover:text-blue-800 hover:font-bold"
                  >
                    <span>View Source Code on GitHub</span>
                  </a>
                </p>

              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
