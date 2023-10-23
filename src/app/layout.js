import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Montserrat } from "next/font/google";
import "./globals.css";

const roboto = Montserrat({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Sundarban Courier Service (Pvt.) Limited",
  description: "This is sundarban courier service official website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main>
          <Header /> {children} <Footer />
        </main>
      </body>
    </html>
  );
}
