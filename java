document.getElementById('mensagemBtn').addEventListener('click', function() {
    const mensagens = [
        "Seja bem-vindo à minha página!",
        "Grandes coisas começam com pequenos passos!",
        "A persistência é o caminho do êxito!",
        "Hoje é um ótimo dia para aprender algo novo!"
    ];
    
    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    document.getElementById('mensagem').textContent = mensagemAleatoria;
});