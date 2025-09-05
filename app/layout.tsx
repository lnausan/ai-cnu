import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "IA y Educación | Inteligencia Artificial aplicada a la educación",
  description:
    "Descubre herramientas, videos y presentaciones sobre Inteligencia Artificial aplicada a la educación. Recursos educativos para profesionales.",
  keywords: "inteligencia artificial, educación, IA, herramientas educativas, tecnología educativa",
  authors: [{ name: "IA y Educación" }],
  creator: "IA y Educación",
  publisher: "IA y Educación",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ia-educacion.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "IA y Educación | Inteligencia Artificial aplicada a la educación",
    description:
      "Descubre herramientas, videos y presentaciones sobre Inteligencia Artificial aplicada a la educación.",
    url: "https://ia-educacion.vercel.app",
    siteName: "IA y Educación",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IA y Educación | Inteligencia Artificial aplicada a la educación",
    description:
      "Descubre herramientas, videos y presentaciones sobre Inteligencia Artificial aplicada a la educación.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "IA y Educación",
      description: "Recursos sobre Inteligencia Artificial aplicada a la educación",
      url: "https://ia-educacion.vercel.app",
      inLanguage: "es-AR",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://ia-educacion.vercel.app/herramientas?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    }),
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR" suppressHydrationWarning>
      <body className={`font-sans ${inter.variable} ${poppins.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
