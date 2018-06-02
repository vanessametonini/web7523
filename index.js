
var btnMudaLayout = document.querySelector("#btnMudaLayout");
var btnsRemoverCartao = document.querySelectorAll(".opcoesDoCartao-remove");
var muralLayout = document.querySelector(".mural")
var noJS = document.querySelectorAll(".no-js");

btnMudaLayout.addEventListener("click", function () {
    if (this.textContent.trim() == "Linhas") {
        this.textContent = "Bloco";
        // muralLayout.classList.remove("mural--linha");
    } else {
        this.textContent = "Linhas";
        // muralLayout.classList.add("mural--linha");

    }

    muralLayout.classList.toggle("mural--linha");
});

btnsRemoverCartao.forEach(function(btn) {
    btn.addEventListener('click', function() {
        var pai = this.parentNode.parentNode;
    
        pai.classList.add("cartao--some");
        pai.addEventListener("transitionend", function() {
            pai.remove();
        });
    });
});

noJS.forEach(function(element) {
    element.classList.remove("no-js");
});
