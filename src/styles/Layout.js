
// import Footer from "@/components/Footer";
import ScrollBtn from "@/components/ScrollBtn";
import { Inter } from 'next/font/google'

const font = Inter({ subsets: ['latin'],weight:['400'] })


export default function Layout({ children }) {
  return (
    <>
      <ScrollBtn/>
      <main className={font.className}>
        {children}
      </main>
      <footer className={font.className}>
       {/* <Footer /> */}
      </footer>
    </>
  );
}
