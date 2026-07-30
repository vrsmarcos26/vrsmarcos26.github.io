// components/TerminalWidget.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaTerminal, FaTimes, FaMinus, FaRegSquare } from "react-icons/fa";
import { useThemeLang } from "../context/ThemeLangContext";

interface HistoryItem {
  command: string;
  output: string | React.ReactNode;
}

export default function TerminalWidget() {
  const { lang } = useThemeLang();
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "init",
      output:
        lang === "en"
          ? "PurpleTeam-CLI v1.0.0 initialized. Type 'help' to see available commands."
          : "PurpleTeam-CLI v1.0.0 iniciado. Digite 'help' para ver os comandos disponíveis.",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Rola automaticamente para o fim ao digitar comandos
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Foca no input sempre que abrir o terminal
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let outputResult: React.ReactNode = "";

    switch (cmd) {
      case "help":
      case "ajuda":
        outputResult = (
          <div className="space-y-1 text-xs">
            <p className="font-bold text-[var(--cor-primaria)]">
              {lang === "en" ? "Available commands:" : "Comandos disponíveis:"}
            </p>
            <p><span className="font-semibold text-emerald-400">whoami</span> - {lang === "en" ? "Summary of my profile" : "Resumo do meu perfil"}</p>
            <p><span className="font-semibold text-emerald-400">skills</span> - {lang === "en" ? "Technical arsenal" : "Arsenal técnico"}</p>
            <p><span className="font-semibold text-emerald-400">contact</span> - {lang === "en" ? "Socials & email" : "Redes e e-mail"}</p>
            <p><span className="font-semibold text-emerald-400">sudo su</span> - {lang === "en" ? "Escalate privileges" : "Escalar privilégios"}</p>
            <p><span className="font-semibold text-emerald-400">clear</span> - {lang === "en" ? "Clear terminal" : "Limpar o terminal"}</p>
          </div>
        );
        break;

      case "whoami":
        outputResult =
          lang === "en"
            ? "Marcos Vinícius | Web Penetration Tester & Full-Stack Developer. B.S. Computer Science undergrad @ CEUB."
            : "Marcos Vinícius | Penetration Tester Web & Desenvolvedor Full-Stack. Graduando em Ciência da Computação @ CEUB.";
        break;

      case "skills":
        outputResult =
          "Python, Go, Docker, OWASP Top 10, Burp Suite, Wazuh, Bash, Linux, Django/FastAPI, AWS, SQL.";
        break;

      case "contact":
      case "contato":
        outputResult = (
          <div className="text-xs">
            <p>Email: vrsmarcos26@gmail.com</p>
            <p>LinkedIn: linkedin.com/in/vrsmarcos26</p>
            <p>GitHub: github.com/vrsmarcos26</p>
          </div>
        );
        break;

      case "clear":
      case "cls":
        setHistory([]);
        setInputVal("");
        return;

      case "sudo su":
      case "sudo":
      case "cat flag.txt":
        outputResult = (
          <span className="text-amber-400 font-bold">
            {lang === "en"
              ? "[!] Nice try! But root access is restricted to authorized personnel. FLAG{purpl3_t3am_m4st3r}"
              : "[!] Boa tentativa! Acesso root restrito. FLAG{purpl3_t3am_m4st3r}"}
          </span>
        );
        break;

      default:
        outputResult = (
          <span className="text-rose-400">
            {lang === "en"
              ? `Command not found: '${cmd}'. Type 'help' for info.`
              : `Comando não encontrado: '${cmd}'. Digite 'help' para ajuda.`}
          </span>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: inputVal, output: outputResult }]);
    setInputVal("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-mono">
      {/* Botão Flutuante (Abre / Fecha) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="p-4 rounded-full bg-[var(--cor-primaria)] text-white shadow-xl shadow-[var(--cor-primaria)]/30 hover:scale-110 transition-all cursor-pointer flex items-center gap-2 border border-white/20"
          title="Abrir Terminal Interativo"
        >
          <FaTerminal className="text-xl" />
          <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">
            CLI
          </span>
        </button>
      )}

      {/* Janela do Terminal */}
      {isOpen && (
        <div className="w-[320px] sm:w-[400px] h-[360px] bg-[#0a0f1c]/95 dark:bg-[#0a0f1c]/95 border border-[var(--cor-primaria)]/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl transition-all">
          {/* Cabeçalho da Janela */}
          <div className="bg-slate-900/80 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <FaTerminal className="text-xs text-[var(--cor-primaria)]" />
              <span className="text-xs font-bold text-slate-300">
                vrsmarcos26@purple-team:~
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition-colors cursor-pointer"
                title="Minimizar"
              >
                <FaMinus className="text-xs" />
              </button>
              <FaRegSquare className="text-xs opacity-50" />
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-rose-400 transition-colors cursor-pointer"
                title="Fechar"
              >
                <FaTimes className="text-xs" />
              </button>
            </div>
          </div>

          {/* Corpo do Terminal (Histórico de Comandos) */}
          <div
            className="flex-1 p-4 overflow-y-auto space-y-3 text-xs text-slate-300"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                {item.command !== "init" && (
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <span>user@vrs:~$</span>
                    <span className="text-white">{item.command}</span>
                  </div>
                )}
                <div className="text-slate-300 leading-relaxed pl-2 border-l border-slate-700">
                  {item.output}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Linha de Comando (Input) */}
          <form
            onSubmit={handleCommand}
            className="bg-slate-950/80 p-3 border-t border-slate-800 flex items-center gap-2"
          >
            <span className="text-emerald-400 font-bold text-xs">~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder={lang === "en" ? "Type 'help'..." : "Digite 'help'..."}
              className="flex-1 bg-transparent text-white text-xs outline-none font-mono"
              autoComplete="off"
              spellCheck="false"
            />
          </form>
        </div>
      )}
    </div>
  );
}