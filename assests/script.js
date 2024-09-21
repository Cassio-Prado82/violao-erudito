function mostrarSecao(secaoClasse) {
    // Oculta todas as seções
    const secoes = document.querySelectorAll("section");
    secoes.forEach(secao => {
        secao.classList.add("ocultar");
    });

    // Mostra a seção clicada
    if (secaoClasse === 'historia') {
        document.querySelector('.historia').classList.remove('ocultar');
        document.querySelector('.estrutura').classList.remove('ocultar'); // Mostra a seção estrutura
    } else {
        const secaoSelecionada = document.querySelector(`.${secaoClasse}`);
        if (secaoSelecionada) {
            secaoSelecionada.classList.remove("ocultar");
        }
    }
}

function mostrarTecnica() {
    // Oculta todas as outras seções antes de mostrar a técnica
    mostrarSecao('tecnica');
    
    const tecnica = "Técnica do arpejo é muito utilizada em peças para violão clássico, como as obras de Villa-Lobos.";
    document.querySelector(".tecnica-destaque").textContent = tecnica;
}

document.querySelector(".formContato").addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const mensagem = document.querySelector(".mensagem-enviada");
    mensagem.textContent = `Obrigado pelo contato, ${nome}! Responderemos em breve.`;
    mensagem.style.display = "block";
    document.querySelector(".formContato").reset();
});


