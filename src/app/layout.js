import "./globals.css";
import Navbar from "../Components/Navbar/page";
import Footer from "../Components/Footer/page";

export const metadata = {
  title: "Homz Realtor",
  description: "Homz Realtor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
