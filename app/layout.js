import "./globals.css";
import { Sora } from "next/font/google";
const sora=Sora({subsets:["latin"],variable:"--font-head"});
export const metadata={title:"Diksha Kadalage | Frontend Developer",description:"Portfolio of Diksha Kadalage, Computer Engineering student and frontend developer."};
export default function RootLayout({children}){return(<html lang="en"><body className={sora.variable}>{children}</body></html>)}
