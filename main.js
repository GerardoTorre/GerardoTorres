function rodarOTexto() {
    let rodape = document.querySelector("Header");
    rodape.style.transform = "rotate(100deg)"; // Aplicando uma rotação de 100 graus
}

setInterval(rodarOTexto, 500);
