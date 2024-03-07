function mudardecor(cor) {
    butao.style.backgroundColor = cor;
}

var butao = document.getElementById("enviar");
butao.onclick = function() {
    mudardecor("red");
};
