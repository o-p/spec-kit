import './globals.css'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Web3 Contract Analyzer',
  description: 'AI-powered smart contract analysis platform',
  keywords: ['blockchain', 'smart contracts', 'ethereum', 'bsc', 'analysis'],
  authors: [{ name: 'Web3 Contract Analyzer Team' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className="min-h-screen bg-gray-50 font-sans antialiased">
        <div className="flex flex-col min-h-screen">
          <header className="bg-white shadow-sm border-b">
            <div className="container mx-auto px-4 py-4">
              <h1 className="text-2xl font-bold text-gray-900">
                Web3 Contract Analyzer
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                智能合約分析平台
              </p>
            </div>
          </header>

          <main className="flex-1 container mx-auto px-4 py-8">
            {children}
          </main>

          <footer className="bg-white border-t">
            <div className="container mx-auto px-4 py-6">
              <div className="text-center text-sm text-gray-600">
                <p className="mb-2">
                  ⚠️ 免責聲明：本平台提供的分析結果僅供教育和參考用途，不構成投資建議。
                </p>
                <p>
                  請務必進行專業審計後再進行任何投資決策。
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
