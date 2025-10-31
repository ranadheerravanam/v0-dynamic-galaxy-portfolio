import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" })

export const metadata: Metadata = {
  title: "Ranadheer Ravanam - App Developer & AI Engineer",
  description: "Dynamic portfolio showcasing innovative app development and AI engineering projects",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} font-poppins antialiased bg-galaxy-dark text-galaxy-light overflow-x-hidden`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
