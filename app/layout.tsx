"use client"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <title>CARVA</title> 
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
