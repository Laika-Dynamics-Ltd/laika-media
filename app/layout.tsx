import './globals.css';
import { Providers } from '@/components/Providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Laika Media - Next-Generation Media Content</title>
        <meta name="description" content="Experience video production and media that inspires, educates, and entertains. Join our community of creators and learners." />
        <meta property="og:title" content="Laika Media - Next-Generation Media Content" />
        <meta property="og:description" content="Experience video production and media that inspires, educates, and entertains. Join our community of creators and learners." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lovable_dev" />
        <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}