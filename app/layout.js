import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./Provider";
import Nav from "@/components/Navbarcomponents/Nav";
import Footer from "@/components/Footercomponent/Footer";
import Logo from '../public/Navabar/Logo2.png'
import SpeedDials from "./SpeedDials";

const inter = Poppins({ subsets: ["latin"] ,weight: ['100','300','400','500','700','900']});

export const metadata = {
  title: "Vakratund Tours - Explore Manali, Ladakh, Kerala & More",
  description: "Vakratund Tours offers curated travel packages to breathtaking destinations like Manali, Ladakh, Kerala, and more. Book your next adventure with us today!",
  keywords: "Vakratund Tours, Manali tours, Ladakh tours, Kerala tours, India travel packages, adventure tours, customized tour packages, travel agency, vacation planning,vakratund,Tours,trip planning",
  author: "Vakratund Tours",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vakratundtours.com",
    title: "Vakratund Tours - Explore Manali, Ladakh, Kerala & More",
    description: "Vakratund Tours offers curated travel packages to breathtaking destinations like Manali, Ladakh, Kerala, and more. Book your next adventure with us today!",
    site_name: "Vakratund Tours",
    images: [
      {
        url: 'https://res.cloudinary.com/ddysmgao7/image/upload/v1724247104/VakratundTours/Gallery%20Images/cxxkmlpwdsm845fmrcbe.jpg',
        width: 800,
        height: 600,
        alt: "Vakratund Tours Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vakratundtours",
    creator: "@vakratundtours",
    title: "Vakratund Tours - Explore Manali, Ladakh, Kerala & More",
    description: "Vakratund Tours offers curated travel packages to breathtaking destinations like Manali, Ladakh, Kerala, and more. Book your next adventure with us today!",
    image:'',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <meta name="author" content={metadata.author} />
      <meta name="robots" content={metadata.robots} />
      <meta property="og:title" content={metadata.openGraph.title} />
      <meta property="og:description" content={metadata.openGraph.description} />
      <meta property="og:type" content={metadata.openGraph.type} />
      <meta property="og:url" content={metadata.openGraph.url} />
      <meta property="og:image" content={Logo} />
      <meta name="twitter:card" content={metadata.twitter.card} />
      <meta name="twitter:site" content={metadata.twitter.site} />
      <meta name="twitter:title" content={metadata.twitter.title} />
      <meta name="twitter:description" content={metadata.twitter.description} />
      <meta name="twitter:image" content={metadata.twitter.image} />
      {/* <link
        rel="icon"
        href={Logo}
        type="image/png"
        sizes="16x16"
      /> */}
    </head>
    <body className={inter.className}>
      <Providers>
        <Nav />
        <div className="fixed bottom-8 right-8 z-50">
          <SpeedDials />
        </div>
        {children}
        <Footer />
      </Providers>
    </body>
  </html>
  );
}
