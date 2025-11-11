document.addEventListener('DOMContentLoaded', () => {
    // 1. Efeito de Carregamento Suave
    // Atraso o carregamento das seções para dar uma sensação mais profissional.
    
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        // Aplica o estilo inicial para que a animação funcione (opacidade 0)
        section.style.opacity = 0; 
        section.style.transform = 'translateY(20px)';

        // Adiciona um atraso baseado no índice da seção
        setTimeout(() => {
            section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }, 150 * index); // 150ms de atraso entre cada seção
    });

    // 2. Destaque do Título ao Rolar a Página (Exemplo de Scroll)
    // Opcional: Adiciona uma sombra sutil ao cabeçalho principal quando o usuário rola a página.

    const header = document.querySelector('header.hero');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // 3. Log de Boas-Vindas (Para recrutadores que abrem o console)
    console.log("Portfólio carregado. Bem-vindo(a)! Avaliando a qualidade e organização do código.");
});
