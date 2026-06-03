// =================================================================
// ARQUIVO DE CONFIGURAÇÃO DO PORTFÓLIO
// =================================================================
// Aqui você pode alterar todos os textos, links e informações
// do site de forma fácil e centralizada.
// =================================================================

const config = {
    // Informações Gerais
    username: "vrsmarcos26", // Seu username do GitHub (para a API)
    
    // Textos em Português
    pt_br: {
        // --- Navegação e Cabeçalho ---
        navLogo: "VRS",
        navLinks: {
            home: "Home",
            projetos: "Projetos",
            contato: "Contato",
        },
        
        // --- Seção Herói (Principal) ---
        heroTitle: "Olá, sou Marcos Vinícius",
        heroTypingSubtitles: [
            "um Profissional de Cibersegurança.",
            "um Desenvolvedor Full-Stack.",
            "um entusiasta de tecnologia.",
        ],
        heroDescription: "Desenvolvedor e profissional de segurança apaixonado por resolver problemas complexos, criar soluções robustas e explorar o universo da tecnologia. De Brasília para o mundo digital.",
        heroButtonContact: "Fale Comigo",
        heroButtonLinkedin: "LinkedIn",

        // --- Seção Sobre Mim ---
        aboutTitle: "Sobre Mim",
        aboutDescription: `
            Sou desenvolvedor Full-Stack (front, back e database) e profissional de Cibersegurança (Purple Team).
            Sou extremamente curioso, comunicativo, gosto de problemas e desafios complexos e trabalho muito bem em equipe.
            Meus hobbies incluem jogos, filmes, CTFs, Bug Bountys e esportes. Atualmente, faço graduação em Ciência da Computação no UniCeub de Brasília.
            Estou sempre desenvolvendo minhas técnicas e conhecimentos não só na faculdade, mas também por fora, em plataformas como Udemy, Alura e Solyd.
        `,

        // --- Seção Habilidades ---
        skillsTitle: "Minhas Habilidades",
        skills: {
            "Desenvolvimento Full-Stack": ["Python", "Go", "Shell Script", "C/C++", "PHP", "HTML5", "CSS3", "JavaScript", "Java", "Kotlin"],
            "Cibersegurança": ["Burp Suite", "Nmap", "Sqlmap", "Wireshark", "Wazuh", "Kali Linux", "Pentest", "John the Ripper"],
            "Banco de Dados": ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Oracle"],
            "DevOps & Infra": ["Docker", "Amazon AWS", "Git", "Grafana", "Zabbix", "Xen Orchestra", "Syspass"],
            "UX & Design": ["Figma", "Canva", "Photoshop"],
        },

        // CERTIFICADOS E CURSOS
        certificationsTitle: "Cursos e Certificações",
        certifications: [
            {
                title: "Ethical Hacking Essencial",
                issuer: "Udemy",
                icon: "fa-solid fa-shield-halved", // Ícone de segurança
                link: "https://www.linkedin.com/in/vrsmarcos26/details/certifications/"
            },
            {
                title: "Android Pentester - SYAP",
                issuer: "Solyd Offensive Security",
                icon: "fa-brands fa-android", // Ícone de android
                link: "https://solyd.com.br/ead/pentest/certificate/FppwmARG3V/"
            },
            {
                title: "Wireless Pentester - SYWP",
                issuer: "Solyd Offensive Security",
                icon: "fa-solid fa-wifi", // Ícone de wifi
                link: "https://solyd.com.br/ead/pentest/certificate/T0ILPNK1vs/"
            },
            {
                title: "Formação Segurança Ofensive",
                issuer: "Alura",
                icon: "fa-solid fa-shield-halved", // Ícone do segurança
                link: "https://cursos.alura.com.br/degree/certificate/02d37e35-15c1-42a8-8141-4c733bd2c9ff"
            },
            {
                title: "Formação WordPress: crie sites do zero",
                issuer: "Alura",
                icon: "fa-brands fa-wordpress", // Ícone do WordPress
                link: "https://cursos.alura.com.br/degree/certificate/eb6b8bd7-8d49-4a38-9b8d-bae284c8a970"
            },
            {
                title: "Curso Espicífico de Inglês",
                issuer: "Centro Interescolar de Línguas 01 de Brasília",
                icon: "fa-solid fa-language", // Ícone do language
                link: "https://www.linkedin.com/in/vrsmarcos26/details/certifications/"
            },
            {
                title: "Segurança de Endpoint",
                issuer: "CISCO",
                icon: "fa-solid fa-shield-alt", // Ícone do segurança
                link: "https://www.credly.com/users/vrsmarcos26"
            },
            {
                title: "Defesa de Rede",
                issuer: "CISCO",
                icon: "fa-solid fa-shield-alt", // Ícone do segurança
                link: "https://www.credly.com/users/vrsmarcos26"
            },
            {
                title: "Percurso de Cibersegurança",
                issuer: "CISCO",
                icon: "fa-solid fa-shield-halved", // Ícone do segurança
                link: "https://www.credly.com/users/vrsmarcos26"
            },
            {
                title: "Introdução à Cibersegurança",
                issuer: "CISCO",
                icon: "fa-solid fa-lock", // Ícone de cadeado
                link: "https://www.credly.com/users/vrsmarcos26"
            },
            {
                title: "Dispositivos de Rede e Configuração Inicial",
                issuer: "CISCO",
                icon: "fa-solid fa-network-wired", // icon wireless
                link: "https://www.credly.com/users/vrsmarcos26"
            },
            {
                title: "Gerenciamento de Ameaças Cibernéticas",
                issuer: "CISCO",
                icon: "fa-solid fa-bug", // Cyber threat icon (BUG)
                link: "https://www.credly.com/users/vrsmarcos26"
            },
            {
                title: "Hacker Ético",
                issuer: "CISCO",
                icon: "fa-solid fa-shield-halved",
                link: "https://www.credly.com/users/vrsmarcos26"
            },
            {
                title: "Noções de rede",
                issuer: "CISCO",
                icon: "fa-solid fa-wifi",
                link: "https://www.credly.com/users/vrsmarcos26"
            }
        ],

        // --- Seção Experiência ---
        experienceTitle: "Experiência e Formação",
        experienceTimeline: [
            {
                role: "Estagiário de Cibersegurança e Desenvolvimento",
                company: "Guardsi Tecnologia",
                period: "Abril 2026 - Presente",
                description: "Foco em AppSec e DevSecOps. Implementação de autenticação segura (2FA) e sanitização de dados em APIs Django/FastAPI. Gerenciamento de containers seguros via Docker e configuração de monitoramento de incidentes em tempo real com Sentry."
            },
            {
                role: "Estagiário de Infraestrutura e Segurança da Informação",
                company: "Conselho Federal de Química (CFQ)",
                period: "Maio 2024 - Fev 2026",
                description: "Atuação direta no tratamento de incidentes de segurança (Wazuh, Firewall, IPS). Desenvolvimento de scripts em Python, Bash e PowerShell para automação de rotinas de infraestrutura e tarefas de segurança."
            },
            {
                role: "Graduando em Ciência da Computação",
                company: "Centro Universitário de Brasília (CEUB)",
                period: "2022 - Atualmente",
                description: "Foco em algoritmos, estruturas de dados, engenharia de software e segurança da informação."
            }
        ],

        // --- Textos da Página de Projetos ---
        projectsTitle: "Meus Projetos",

        // --- Textos da Página de Contato ---
        contactPageTitle: "Vamos Conversar!",
        contactPageDescription: `
            Estou sempre em busca de novos desafios e oportunidades para colaborar em projetos inovadores. 
            Se você tem uma ideia, uma proposta, ou apenas quer trocar uma ideia sobre tecnologia, não hesite em me contatar através de um dos canais abaixo.
        `,

        projectFilters: [
            "full-stack",
            "cibersecurity",
            "ia",
            "mobile",
            "devops",
            "data-science",
            "ux-design",
            "portfolio-lab" 
        ],

        // --- Rodapé e Contato ---
        footerTitle: "Vamos nos Conectar?",
        footerDescription: "Estou sempre aberto a novas oportunidades, projetos e um bom bate-papo. Sinta-se à vontade para entrar em contato!",
        footerCopyright: `© ${new Date().getFullYear()} - Desenvolvido por Marcos Vinícius Rocha Silva`,
        
        // --- Links Sociais ---
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/vrsmarcos26/",
            github: "https://github.com/vrsmarcos26",
            email: "mailto:vrsmarcos26@gmail.com",
            discord: "https://discord.com/users/vrsmarcos26",
            instagram: "https://www.instagram.com/_marcos.vrs"
        }
    },
    
    // Textos em Inglês (Para o futuro)
    en: {
        // --- Navigation and Header ---
        navLogo: "VRS",
        navLinks: {
            home: "Home",
            projetos: "Projects",
            contato: "Contact",
        },
        
        // --- Hero Section ---
        heroTitle: "Hi, I'm Marcos Vinícius",
        heroTypingSubtitles: [
            "a Web Penetration Tester.",
            "a Purple Team Professional.",
            "an AppSec Specialist.",
        ],
        heroDescription: "Cybersecurity professional merging offensive web testing with AppSec and DevSecOps. From discovering vulnerabilities to building secure automation, I bridge the gap between attack and defense.",
        heroButtonContact: "Contact Me",
        heroButtonLinkedin: "LinkedIn",

        // --- About Me Section ---
        aboutTitle: "About Me",
        aboutDescription: `
            I am a Web Penetration Tester and Purple Team professional. By combining my background in Full-Stack development and IT Infrastructure, I don't just exploit vulnerabilities—I understand their root causes in the code.
            My hands-on experience ranges from incident handling (Wazuh, Firewalls) to implementing secure authentication and data sanitization in APIs (Django/FastAPI). 
            I am driven by complex challenges, secure automation (Python/Bash), and continuously sharpening my offensive skills through CTFs, Bug Bounties, and continuous training to build robust digital defenses.
        `,

        // --- Skills Section ---
        skillsTitle: "My Skills",
        skills: {
            // CHAVES TRADUZIDAS AQUI
            "Full-Stack Development": ["Python", "Go", "Shell Script", "C/C++", "PHP", "HTML5", "CSS3", "JavaScript", "Java", "Kotlin"],
            "Cybersecurity": ["Burp Suite", "Nmap", "Sqlmap", "Wireshark", "Wazuh", "Kali Linux", "Pentest", "John the Ripper"],
            "Database": ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Oracle"],
            "DevOps & Infra": ["Docker", "Amazon AWS", "Git", "Grafana", "Zabbix", "Xen Orchestra", "Syspass"],
            "UX & Design": ["Figma", "Canva", "Photoshop"],
        },

        // Certifications 
        certificationsTitle: "Courses & Certifications",
        certifications: [
            {
                title: "Essential Ethical Hacking",
                issuer: "Udemy",
                icon: "fa-solid fa-shield-halved", // Security icon
                link: "https://www.linkedin.com/in/vrsmarcos26/details/certifications/"
            },
            {
                title: "Android Pentester - SYAP",
                issuer: "Solyd Offensive Security",
                icon: "fa-brands fa-android", // Android icon
                link: "https://solyd.com.br/ead/pentest/certificate/FppwmARG3V/"
            },
            {
                title: "Wireless Pentester - SYWP",
                issuer: "Solyd Offensive Security",
                icon: "fa-solid fa-wifi", // Wi-Fi icon
                link: "https://solyd.com.br/ead/pentest/certificate/T0ILPNK1vs/"
            },
            {
                title: "Offensive Security Training",
                issuer: "Alura",
                icon: "fa-solid fa-shield-halved", // Security icon
                link: "https://cursos.alura.com.br/degree/certificate/02d37e35-15c1-42a8-8141-4c733bd2c9ff"
            },
            {
                title: "WordPress Training: Build Websites from Scratch",
                issuer: "Alura",
                icon: "fa-brands fa-wordpress", // WordPress icon
                link: "https://cursos.alura.com.br/degree/certificate/eb6b8bd7-8d49-4a38-9b8d-bae284c8a970"
            },
            {
                title: "Specific English Course",
                issuer: "Centro Interescolar de Línguas 01 de Brasília",
                icon: "fa-solid fa-language", // Language icon
                link: "https://www.linkedin.com/in/vrsmarcos26/details/certifications/"
            },
            {
                title: "Endpoint Security",
                issuer: "CISCO",
                icon: "fa-solid fa-shield-alt", // Security icon
                link: "https://www.credly.com/users/vrsmarcos26"
            },
            {
                title: "Network Defense",
                issuer: "CISCO",
                icon: "fa-solid fa-shield-alt", // Security icon
                link: "https://www.credly.com/users/vrsmarcos26"
            },
            {
                title: "Cybersecurity Pathway",
                issuer: "CISCO",
                icon: "fa-solid fa-shield-halved", // Security icon
                link: "https://www.credly.com/users/vrsmarcos26"
            },
            {
                title: "Introduction to Cybersecurity",
                issuer: "CISCO",
                icon: "fa-solid fa-lock", // Lock icon
                link: "https://www.credly.com/users/vrsmarcos26"
            },
            {
                title: "Networking Devices and Initial Configuration",
                issuer: "CISCO",
                icon: "fa-solid fa-network-wired", // Network icon
                link: "https://www.credly.com/users/vrsmarcos26"
            },
            {
                title: "Cyber Threat Management",
                issuer: "CISCO",
                icon: "fa-solid fa-bug", // Cyber threat icon
                link: "https://www.credly.com/users/vrsmarcos26"
            },
            {
                title: "Ethical Hacker",
                issuer: "CISCO",
                icon: "fa-solid fa-shield-halved",
                link: "https://www.credly.com/users/vrsmarcos26"
            },
            {
                title: "Networking Basics",
                issuer: "CISCO",
                icon: "fa-solid fa-wifi",
                link: "https://www.credly.com/users/vrsmarcos26"
            }
        ],

        // --- Experience Section ---
        experienceTitle: "Experience & Education",
        experienceTimeline: [
            {
                role: "Cybersecurity and Development Intern",
                company: "Guardsi Tecnologia",
                period: "Apr 2026 - Present",
                description: "Focused on AppSec and DevSecOps. Implementing secure authentication (2FA) and data sanitization in Django/FastAPI APIs. Managing secure containers via Docker and configuring real-time incident monitoring with Sentry."
            },
            {
                role: "Information Technology & Security Intern",
                company: "Federal Council of Chemistry (CFQ)",
                period: "May 2024 - Feb 2026",
                description: "Direct involvement in incident response using Wazuh (Endpoint), IPS, and Firewalls. Developed Python, Bash, and PowerShell scripts to automate infrastructure routines and security tasks."
            },
            {
                role: "Bachelor's Degree in Computer Science",
                company: "University Center of Brasília (CEUB)",
                period: "2022 - Present",
                description: "Focus on algorithms, data structures, software engineering, and information security."
            }
        ],

        // --- Projects Page Texts ---
        projectsTitle: "My Projects",
        projectsNoticeEN: "Note: The project descriptions and content are currently in Portuguese.", // AVISO PARA LEITORES EM INGLÊS

        // --- Contact Page Texts ---
        contactPageTitle: "Let's Talk!",
        contactPageDescription: `
            I'm always looking for new challenges and opportunities to collaborate on innovative projects.
            If you have an idea, a proposal, or just want to chat about technology, don't hesitate to contact me through one of the channels below.
        `,

        // CHAVE ADICIONADA AQUI
        projectFilters: [
            "full-stack",
            "cybersecurity",
            "ia",
            "mobile",
            "devops",
            "data-science",
            "ux-design",
            "portfolio-lab"
        ],

        // --- Footer and Contact ---
        footerTitle: "Let's Connect?",
        footerDescription: "I'm always open to new opportunities, projects, and a good chat. Feel free to get in touch!",
        footerCopyright: `© ${new Date().getFullYear()} - Developed by Marcos Vinícius Rocha Silva`,
        
        // Links Sociais são globais, não precisam estar aqui.
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/vrsmarcos26/",
            github: "https://github.com/vrsmarcos26",
            email: "mailto:vrsmarcos26@gmail.com",
            discord: "https://discord.com/users/vrsmarcos26",
            instagram: "https://www.instagram.com/_marcos.vrs"
        }
    }

};






