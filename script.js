document.addEventListener('DOMContentLoaded', function() {
    const mensagemBtn = document.getElementById('mensagemBtn');
    const mensagemContainer = document.getElementById('mensagemContainer');
    
    const mensagens = [
        "A persistência é o caminho do êxito. - Charles Chaplin",
        "O sucesso nasce do querer, da determinação e persistência. - Chico Xavier",
        "Não espere por circunstâncias ideais. Crie-as. - George Bernard Shaw",
        "O fracasso é apenas uma oportunidade para começar de novo, desta vez de forma mais inteligente. - Henry Ford",
        "Acredite você pode e você já está no meio do caminho. - Theodore Roosevelt"
    ];
    
    mensagemBtn.addEventListener('click', function() {
        const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
        
        // Efeito de fade in
        mensagemContainer.style.opacity = 0;
        mensagemContainer.textContent = mensagemAleatoria;
        
        let opacidade = 0;
        const fadeIn = setInterval(function() {
            if (opacidade >= 1) {
                clearInterval(fadeIn);
            } else {
                opacidade += 0.1;
                mensagemContainer.style.opacity = opacidade;
            }
        }, 50);
    });
});