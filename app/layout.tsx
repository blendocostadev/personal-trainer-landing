import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Angelica Santos - Personal Trainer | Transforme seu Corpo em 90 Dias",
  description:
    "Acompanhamento 100% personalizado com resultados reais. Treinos direcionados e suporte total para você alcançar o melhor shape da sua vida.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
