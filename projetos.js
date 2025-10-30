document.addEventListener('DOMContentLoaded', () => {
    const githubUsername = config.username; // Pega o username do config.js
    const apiUrl = `https://api.github.com/users/${githubUsername}/repos`;

    const projectsGrid = document.getElementById('projects-grid');
    const filterButtonsContainer = document.getElementById('filter-buttons');
    const loadingMessage = document.querySelector('.loading-message');
    const noticeContainer = document.getElementById('projects-notice');
    const currentLang = localStorage.getItem('language') || 'pt_br';

    if (currentLang === 'en' && config.en.projectsNoticeEN) {
        noticeContainer.innerHTML = `<p>${config.en.projectsNoticeEN}</p>`;
    }

    let allProjects = []; // Array para guardar todos os projetos buscados

    // Função principal para buscar e exibir os projetos
    async function fetchAndDisplayProjects() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Erro na API do GitHub: ${response.statusText}`);
            }
            const repos = await response.json();
            
            // Filtra apenas repositórios que têm o tópico "portfolio"
            allProjects = repos.filter(repo => repo.topics.includes('portfolio'));

            if (allProjects.length === 0) {
                loadingMessage.textContent = 'Nenhum projeto encontrado no GitHub com a tag "portfolio".';
                return;
            }

            setupFilterButtons();
            displayProjects('all'); // Exibe todos os projetos inicialmente
            
        } catch (error) {
            console.error("Falha ao buscar projetos:", error);
            loadingMessage.textContent = 'Não foi possível carregar os projetos. Tente novamente mais tarde.';
        }
    }

    // Função para exibir os projetos na tela
    function displayProjects(filter) {
        projectsGrid.innerHTML = ''; // Limpa a grade

        const filteredProjects = filter === 'all'
            ? allProjects
            : allProjects.filter(project => project.topics.includes(filter));

        if (filteredProjects.length === 0) {
            projectsGrid.innerHTML = '<p>Nenhum projeto encontrado para esta categoria.</p>';
            return;
        }

        filteredProjects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';

            // Cria as tags de tecnologia (excluindo 'portfolio')
            const tagsHTML = project.topics
                .filter(topic => topic !== 'portfolio')
                .map(topic => `<span class="tag">${topic}</span>`)
                .join('');

            projectCard.innerHTML = `
                <h3>${project.name.replace(/[-_]/g, ' ')}</h3>
                <p class="project-description">${project.description || 'Sem descrição.'}</p>
                <div class="project-tags">${tagsHTML}</div>
                <div class="project-links">
                    <a href="${project.html_url}" target="_blank" title="Ver no GitHub"><i class="fab fa-github"></i></a>
                    ${project.homepage ? `<a href="${project.homepage}" target="_blank" title="Ver Demo Online"><i class="fas fa-external-link-alt"></i></a>` : ''}
                </div>
            `;
            projectsGrid.appendChild(projectCard);
        });
    }

    // Função para criar os botões de filtro dinamicamente
    function setupFilterButtons() {
        const definedOrder = config.pt_br.projectFilters || [];
        
        // Função para formatar o texto: "full-stack" -> "Full Stack"
        const formatTopic = (topic) => {
            if (topic === 'ia') return 'IA'; // Caso especial para "IA"
            if (topic === 'portfolio-lab') return 'Laboratórios'; // Renomeando o lab
            return topic
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        };

        let buttonsHTML = '<button class="filter-btn active" data-filter="all">Todos</button>';
        
        // Cria os botões na ordem definida no config.js
        definedOrder.forEach(topic => {
            // Verifica se existe pelo menos um projeto com este tópico antes de criar o botão
            if (allProjects.some(p => p.topics.includes(topic))) {
                buttonsHTML += `<button class="filter-btn" data-filter="${topic}">${formatTopic(topic)}</button>`;
            }
        });

        filterButtonsContainer.innerHTML = buttonsHTML;

        // Adiciona os eventos de clique aos botões (esta parte continua igual)
        const buttons = document.querySelectorAll('.filter-btn');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const filter = button.getAttribute('data-filter');
                displayProjects(filter);
            });
        });
    }

    // Inicia todo o processo
    if (projectsGrid) {
        fetchAndDisplayProjects();
    }
});