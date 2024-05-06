// Captura o formulário
const form = document.getElementById('myForm');

// Adiciona um listener para o evento de submit
form.addEventListener('submit', function(event) {
    // Previne o comportamento padrão do formulário de ser submetido
    event.preventDefault();

    // Captura os valores dos campos A e B
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);

    // Verifica se o número B é maior que o número A
    if (campoB > campoA) {
        // Se for válido, exibe uma mensagem positiva
        alert("Formulário válido! B é maior que A.");
    } else {
        // Se for inválido, exibe uma mensagem negativa
        alert("Formulário inválido! B deve ser maior que A.");
    }
});
