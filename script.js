// =================================================================
// SCRIPT PRINCIPAL
// =================================================================
// Este arquivo controla as interatividades do site, como
// a troca de tema e o carregamento dinâmico de conteúdo.
// =================================================================

// Espera o DOM (a estrutura da página) estar completamente carregado
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. LÓGICA PARA TROCA DE TEMA (DARK/LIGHT MODE) ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const applyTheme = (theme) => {
        body.setAttribute('data-theme', theme);
        if (themeToggle) {
            themeToggle.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        }
    };

    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // =================================================================
    // --- 2. LÓGICA DE MULTI-IDIOMA ---
    // =================================================================
    const langPtBtn = document.getElementById('lang-pt');
    const langEnBtn = document.getElementById('lang-en');
    let typeEffectTimeout; // Variável para controlar o timeout da animação

    function updateContent(lang) {
        const content = config[lang];

        const fillText = (elementId, text) => {
            const element = document.getElementById(elementId);
            if (element) element.innerHTML = text;
        };

        // --- Preenche todo o conteúdo ---
        fillText('nav-logo', content.navLogo);
        fillText('nav-home', content.navLinks.home);
        fillText('nav-projetos', content.navLinks.projetos);
        fillText('nav-contato', content.navLinks.contato);

        // Títulos das páginas específicas
        fillText('projetos-titulo', content.projectsTitle);
        fillText('contato-titulo-pagina', content.contactPageTitle);
        fillText('contato-descricao-pagina', content.contactPageDescription);

        // Seção Herói (só na index.html)
        const heroTitleElement = document.getElementById('hero-titulo');
        if (heroTitleElement) {
            fillText('hero-titulo', content.heroTitle);
            fillText('hero-descricao', content.heroDescription);
            fillText('btn-contato', content.heroButtonContact);
            
            // --- LÓGICA DA ANIMAÇÃO MOVIDA PARA CÁ ---
            clearTimeout(typeEffectTimeout); // Para a animação anterior antes de começar uma nova
            const heroSubtitleElement = document.getElementById('hero-subtitulo-animado');
            if(heroSubtitleElement) {
                let subtitleIndex = 0;
                let charIndex = 0;
                let isDeleting = false;

                function typeEffect() {
                    const typingSpeed = 100, deletingSpeed = 60, delay = 2000;
                    const currentSubtitle = content.heroTypingSubtitles[subtitleIndex];
                    
                    if (!isDeleting) {
                        heroSubtitleElement.textContent = currentSubtitle.substring(0, charIndex++);
                        if (charIndex > currentSubtitle.length) {
                            isDeleting = true;
                            typeEffectTimeout = setTimeout(typeEffect, delay);
                        } else {
                            typeEffectTimeout = setTimeout(typeEffect, typingSpeed);
                        }
                    } else {
                        heroSubtitleElement.textContent = currentSubtitle.substring(0, charIndex--);
                        if (charIndex < 0) {
                            isDeleting = false;
                            subtitleIndex = (subtitleIndex + 1) % content.heroTypingSubtitles.length;
                            typeEffectTimeout = setTimeout(typeEffect, typingSpeed);
                        } else {
                            typeEffectTimeout = setTimeout(typeEffect, deletingSpeed);
                        }
                    }
                }
                typeEffect(); // Inicia a animação com o novo idioma
            }
        }
        
        fillText('sobre-titulo', content.aboutTitle);
        fillText('sobre-texto-completo', content.aboutDescription);
        fillText('habilidades-titulo', content.skillsTitle);

        const skillsContainer = document.getElementById('habilidades-container');
        if (skillsContainer && content.skills) {
            skillsContainer.innerHTML = ''; 
            for (const category in content.skills) {
                const skills = content.skills[category];
                const categoryDiv = document.createElement('div');
                categoryDiv.className = 'habilidade-categoria';
                let skillsHTML = '';
                skills.forEach(skill => { skillsHTML += `<span class="tag">${skill}</span>`; });
                categoryDiv.innerHTML = `<h3>${category}</h3><div class="tags-container">${skillsHTML}</div>`;
                skillsContainer.appendChild(categoryDiv);
            }
        }

        fillText('experiencia-titulo', content.experienceTitle);
        const timelineContainer = document.getElementById('timeline');
        if (timelineContainer && content.experienceTimeline) {
            timelineContainer.innerHTML = '';
            content.experienceTimeline.forEach(item => {
                const timelineItem = document.createElement('div');
                timelineItem.className = 'timeline-item';
                timelineItem.innerHTML = `<div class="timeline-content"><h3>${item.role}</h3><p>${item.company} | ${item.period}</p><span>${item.description}</span></div>`;
                timelineContainer.appendChild(timelineItem);
            });
        }
        
        fillText('footer-titulo', content.footerTitle);
        fillText('footer-descricao', content.footerDescription);
        fillText('footer-copyright', content.footerCopyright);

        const socialLinks = config[lang].socialLinks || config.pt_br.socialLinks;
        if (document.getElementById('link-email')) {
            document.getElementById('link-email').href = socialLinks.email;
            document.getElementById('link-linkedin').href = socialLinks.linkedin;
            document.getElementById('link-github').href = socialLinks.github;
            document.getElementById('link-discord').href = socialLinks.discord;
            document.getElementById('link-instagram').href = socialLinks.instagram;
        }

        if (document.getElementById('contato-pagina')) {
            document.getElementById('link-email-contato').href = socialLinks.email;
            document.getElementById('link-linkedin-contato').href = socialLinks.linkedin;
            document.getElementById('link-discord-contato').href = socialLinks.discord;
            document.getElementById('link-instagram-contato').href = socialLinks.instagram;
        }

        if(lang === 'pt_br') {
            langPtBtn.classList.add('active');
            langEnBtn.classList.remove('active');
        } else {
            langEnBtn.classList.add('active');
            langPtBtn.classList.remove('active');
        }

        fillText('certificacoes-titulo', content.certificationsTitle);
        const gliderContainer = document.getElementById('certifications-glider');
        if (gliderContainer && content.certifications) {
            gliderContainer.innerHTML = '';
            content.certifications.forEach(cert => {
                const certCard = document.createElement('div');
                certCard.className = 'cert-card';
                certCard.innerHTML = `
                    <i class="${cert.icon}"></i>
                    <h3>${cert.title}</h3>
                    <p>${cert.issuer}</p>
                `;
                gliderContainer.appendChild(certCard);
            });
        }
    }

    function setLanguage(lang) {
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang.split('_')[0];
        updateContent(lang);
    }

    langPtBtn.addEventListener('click', () => setLanguage('pt_br'));
    langEnBtn.addEventListener('click', () => setLanguage('en'));

    let initialLang = localStorage.getItem('language') || (navigator.language.startsWith('pt') ? 'pt_br' : 'en');
    setLanguage(initialLang);

    const gliderElement = document.querySelector('.glider');
    if (gliderElement) {
        new Glider(gliderElement, {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            dots: '#dots',
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            },
            responsive: [
                {
                    breakpoint: 768,
                    settings: { slidesToShow: 2, slidesToScroll: 2 }
                },
                {
                    breakpoint: 1024,
                    settings: { slidesToShow: 3, slidesToScroll: 3 }
                }
            ]
        });
    }
});