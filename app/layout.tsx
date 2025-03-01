import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Harsh Portfolio',
  description: 'Created with harsh dev',
  generator: 'harsh dev',
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
