const dark = document.getElementById("switch-shadow");
const trocarCor = document.getElementById("bgcolor");
var changeColor = document.getElementById("changeColor");

changeColor.onclick = function(){
    trocarCor.style.backgroundColor = "black";
}


function mudarBackground() {
    // Obtendo o elemento do corpo da página

    trocarCor.style.backgroundColor = "black"; // Você pode usar qualquer cor válida aqui, como "blue", "#FF0000", "rgba(0, 255, 0, 0.5)", etc.
}
