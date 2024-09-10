"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Bootstrapjs from "./Bootstrapjs";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "CA Dhiraj Ostwal",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Bootstrapjs/>
      <body className={inter.className}>

        <QueryClientProvider client={queryClient}>
            <Navbar/>
              {children}
            <Footer/>
         {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
        
        </body>
    </html>
  );
}
