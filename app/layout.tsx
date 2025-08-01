import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'Gaurav Thakur - AI Engineer Portfolio',
  description: 'AI That Listens. AI That Remembers. I build intelligent voice agents and retrieval-augmented chatbots that listen like humans, respond like experts, and automate like machines.',
  keywords: ['AI Engineer', 'Voice Agents', 'RAG Chatbots', 'Machine Learning', 'OpenAI', 'Azure', 'FastAPI'],
  authors: [{ name: 'Gaurav Thakur' }],
  creator: 'Gaurav Thakur',
  publisher: 'Gaurav Thakur',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ai-engineer-portfolio-kappa.vercel.app'),
  openGraph: {
    title: 'Gaurav Thakur - AI Engineer Portfolio',
    description: 'I build voice-enabled AI agents, secure RAG chatbots, and automation systems that think, speak, and act with purpose — at scale.',
    url: 'https://gauravthakur.dev',
    siteName: 'Gaurav Thakur Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Gaurav Thakur - AI Engineer Portfolio',
    description: 'AI That Listens. AI That Remembers. Building the future of conversational AI.',
    creator: '@gauravthakur',
    creatorId: '1467726470533754880',
    images: ['/profile-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'rgba(0, 0, 0, 0.8)',
                color: '#fff',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
