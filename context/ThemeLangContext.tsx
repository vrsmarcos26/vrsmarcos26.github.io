// context/ThemeLangContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { config } from "../data/config";

type Lang = "pt_br" | "en";
type Theme = "dark" | "light";

// Usamos Record<string, any> para o content aceitar perfeitamente
// tanto as chaves em português quanto as chaves em inglês!
interface ContextProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  theme: Theme;
  toggleTheme: () => void;
  content: Record<string, any>;
}

const ThemeLangContext = createContext<ContextProps | undefined>(undefined);

export const ThemeLangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>("pt_br");
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    // Carrega idioma e tema salvos no localStorage[cite: 7]
    const savedLang = (localStorage.getItem("language") as Lang) || "pt_br";
    const savedTheme = (localStorage.getItem("theme") as Theme) || "dark";
    setLangState(savedLang);
    setThemeState(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("language", newLang);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const content = config[lang];

  return (
    <ThemeLangContext.Provider value={{ lang, setLang, theme, toggleTheme, content }}>
      {children}
    </ThemeLangContext.Provider>
  );
};

export const useThemeLang = () => {
  const context = useContext(ThemeLangContext);
  if (!context) throw new Error("useThemeLang deve ser usado dentro do ThemeLangProvider");
  return context;
};