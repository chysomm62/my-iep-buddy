import './globals.css'
import type { Metadata } from 'next'
import { Inter,Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My IEP Buddy',
  description: 'Never struggle with writing an IEP ever again.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
