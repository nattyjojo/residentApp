import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// useEffect(() => {
//   const currenrWebsitePage = window.location.href;
//   console.log(currenrWebsitePage);
// }, []);

export const metadata = {
  title: "ResidentApp | Home",
  description: "Resident App, All in one Resident Managment Software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
