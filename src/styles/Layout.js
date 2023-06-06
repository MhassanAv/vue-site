
// import Footer from "@/components/Footer";
import ScrollBtn from "@/components/ScrollBtn";
import { Squada_One } from 'next/font/google'

const font = Squada_One({ subsets: ['latin'],weight:['400'] })


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
