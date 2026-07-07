import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'Gaurav Thakur — Head of AI Transformation & Principal AI Architect',
  description: 'Head of AI Transformation & Principal AI Architect at SKYTEK Solutions, LLC. I identify the business problem worth solving, align stakeholders, and take the answer end-to-end — strategy, architecture, build, deployment, and the team that runs it.',
  keywords: [
    'Head of AI Transformation',
    'Principal AI Architect',
    'AI Strategy',
    'Enterprise AI',
    'Generative AI',
    'Agentic AI',
    'RAG',
    'LLMOps',
    'Solution Architecture',
    'Azure',
    'OpenAI',
    'SKYTEK Solutions',
    'AI Consulting',
    'Digital Transformation',
    'MLOps',
    'FastAPI',
  ],
  authors: [{ name: 'Gaurav Thakur' }],
  creator: 'Gaurav Thakur',
  publisher: 'Gaurav Thakur',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gauravthakur.mspautomation.net'),
  openGraph: {
    title: 'Gaurav Thakur — Head of AI Transformation & Principal AI Architect',
    description: 'From boardroom to production. I translate business problems into AI systems that ship — strategy, architecture, build, deploy, and the team to run it.',
    url: 'https://gauravthakur.mspautomation.net',
    siteName: 'Gaurav Thakur — Head of AI Transformation',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/gaurav-profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Gaurav Thakur — Head of AI Transformation & Principal AI Architect',
      },
    ],
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
    title: 'Gaurav Thakur — Head of AI Transformation & Principal AI Architect',
    description: 'Business problem in. Production AI out. Enterprise AI transformation — end-to-end.',
    creator: '@gauravthakur',
    images: ['/gaurav-profile.jpg'],
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
