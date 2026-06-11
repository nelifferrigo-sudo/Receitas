// Controle do Tamanho da Fonte
let tamanhoAtual = 16; 

function alterarFonte(acao) {
    const html = document.documentElement;
    if (acao === 'aumentar' && tamanhoAtual < 24) {
        tamanhoAtual += 2;
    } else if (acao === 'diminuir' && tamanhoAtual > 12) {
        tamanhoAtual -= 2;
    }
    html.style.setProperty('--tamanho-base', tamanhoAtual + 'px');
}

// Controle do Modo Claro / Escuro
function alternarModo() {
    const html = document.documentElement;
    const botao = document.getElementById('botao-fundo');
    
    // Verifica o tema atual com segurança
    const temaAtual = html.getAttribute('data-tema');
    
    if (temaAtual === 'escuro') {
        html.removeAttribute('data-tema');
        botao.innerText = "🌓 Modo Escuro";
    } else {
        html.setAttribute('data-tema', 'escuro');
        botao.innerText = "☀️ Modo Claro";
    }
}