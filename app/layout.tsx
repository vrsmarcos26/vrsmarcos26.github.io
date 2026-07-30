import type { Metadata } from "next";
import "./globals.css";
import { ThemeLangProvider } from "../context/ThemeLangContext";
import TerminalWidget from "../components/TerminalWidget";

export const metadata: Metadata = {
  title: "Marcos Vinícius | Purple Team & Full-Stack Developer",
  description: "Portfólio de Marcos Vinícius, profissional de Cibersegurança (Offensive Web & AppSec) e Desenvolvedor Full-Stack.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      new URL("/favicon.ico", "http://localhost:3000"),
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeLangProvider>
          {children}
          {/* Nosso Terminal Cibernético Interativo Flutuante */}
          <TerminalWidget />
        </ThemeLangProvider>
      </body>
    </html>
  );
}