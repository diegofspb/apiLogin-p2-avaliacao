// scripts.js

// Função para carregar o cabeçalho dinamicamente
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(html => document.getElementById('headerContent').innerHTML = html);
}

// Chama a função para carregar o cabeçalho quando a página carregar
window.onload = function () {
    loadHeader();
};

// Função para login (exemplo, você precisará implementar a lógica real)
function login() {
    alert("Login realizado com sucesso!");
}

// Função para enviar mensagem (exemplo, você precisará implementar a lógica real)
function enviarMensagem() {
    alert("Mensagem enviada com sucesso!");
}
