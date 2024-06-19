import Navbar from './_components/Navbar';
import './globals.css';

import type { Metadata } from 'next';
import {Josefin_Sans} from 'next/font/google'
export const metadata: Metadata = {
  title: 'Artwork Artsy',
};
const josefin = Josefin_Sans({
  subsets:['latin'],
  display:"swap",
});
console.log(josefin);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={`${josefin.className} bg-primary-950 relative antialiased text-primary-100 min-h-screen flex flex-col`}>
        <Navbar/>
        <div className="flex-1 px-8 py-12 grid">
      <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
       </body>
    </html>
  );
}
