import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Laika Media',
  description: 'Professional video production and media content',
  icons: {
    icon: '/laika-bot.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
