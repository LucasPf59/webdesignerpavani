//criar a funcao que está sendo chamada no form:
function validar() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("mensagem").value;

    if (nome == '') {
        alert('por favor, digite seu nome');
        return false;
    }
    if (email == '') {
        alert('por favor, digite seu email');
        return false;
    }
    if (msg == '') {
        alert('por favor, digite uma mensagem');
        return false;
    }
    document.cookie = `nome=${encodeURIComponent(nome)}`;
    document.cookie = `email=${encodeURIComponent(email)}`;
    document.cookie = `msg=${encodeURIComponent(msg)}`;
}
