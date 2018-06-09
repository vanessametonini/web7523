
(function () {
    const cartoes = document.querySelectorAll(".cartao");

    cartoes.forEach(cartao => {
        cartao.addEventListener("focusin", function () {
            cartao.classList.add("cartao--focado");
        })

        cartao.addEventListener("focusout", function () {
            cartao.classList.remove("cartao--focado");
        })

        cartao.addEventListener("click", function (event) {
            const elementoSelecionado = event.target;

            if (elementoSelecionado.classList.contains("opcoesDoCartao-opcao")) {
                alterarCor(elementoSelecionado, cartao);
            }

            if (elementoSelecionado.classList.contains("opcoesDoCartao-remove")) {
                removerCartao(elementoSelecionado);
            }
        });

        cartao.addEventListener("keyup", function (event) {
            // keyCode=13 => enter
            // keyCode=32 => espaço

            if (event.keyCode == 13 || event.keyCode == 32) {
                event.target.click();
            }
        });
    });

    function alterarCor(elementoSelecionado, cartao) {
        const corSelecionada = elementoSelecionado.style.color;

        cartao.style.background = corSelecionada;
        // cartao.setAttribute("style", "background: " + corSelecionada);
    }

    function removerCartao(elementoSelecionado) {
        var pai = elementoSelecionado.parentNode.parentNode;

        pai.classList.add("cartao--some");
        pai.addEventListener("transitionend", function () {
            pai.remove();
        });
    }
})()
