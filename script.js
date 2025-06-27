//
// ARQUIVO: script.js (Versão Romântica)
function verificarSenha() {
    // ----> MUDE PARA UMA SENHA COM SIGNIFICADO REAL <----
    // Ex: "primeirobeijo", "08demarço", "paris2023"
    const senhaCorreta = "7027"; 

    let senhaDigitada = document.getElementById('senha').value;

    if (senhaDigitada === senhaCorreta) {
        // Leva para a página principal
        window.location.href = 'home.html'; 
    } else {
        // Mensagem de erro mais gentil
        alert('Senha incorreta... tente novamente por, são os 4 primeiros números do seu CPF mocinha!');
    }
}
