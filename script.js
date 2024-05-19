document.addEventListener("DOMContentLoaded", function() {
    // Função para rolar suavemente até a seção desejada
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        window.scrollTo({
            behavior: "smooth",
            top: section.offsetTop - 50 // Considerando o cabeçalho fixo
        });
    }

    // Associando os itens do menu com as seções correspondentes
    document.querySelectorAll('nav ul li a').forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Evita o comportamento padrão de um link
            const sectionId = this.getAttribute('href').substring(1); // Obtém o ID da seção
            scrollToSection(sectionId); // Chama a função de rolar suavemente
        });
    });
});
