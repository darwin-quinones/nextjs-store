
import { Inter } from "next/font/google";

// this import way is better when getting errors
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  // THIS IS THE MAIN COMPONENT THAT WRAPPERS ALL
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
