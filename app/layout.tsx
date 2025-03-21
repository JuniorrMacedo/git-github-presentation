import type { Metadata } from 'next'
import './globals.css'
import { Smile } from "lucide-react"

export const metadata: Metadata = {
  title: 'Git & GitHub',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
