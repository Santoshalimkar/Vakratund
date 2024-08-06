import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./Provider";
import Nav from "@/components/Navbarcomponents/Nav";
import Footer from "@/components/Footercomponent/Footer";
import Logo from '../public/Navabar/Logo2.png'

const inter = Poppins({ subsets: ["latin"] ,weight: ['100','300','400','500','700','900']});

export const metadata = {
  title: "Vakratund Tours - Book Tour ",
  description: "Vakratund Tours - Book Tour",
  logo : Logo.src,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link
  rel="icon"
  href="/icon?<generated>"
  type="image/<generated>"
  sizes="<generated>"
/>
    </head>
      <body className={inter.className}>
        <Providers>
         <Nav/>
        {children}
        <Footer/>
        </Providers>
      </body>
    </html>
  );
}
