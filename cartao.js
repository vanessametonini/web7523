(function () {
    const cartoes = document.querySelectorAll(".cartao");

    cartoes.forEach(cartao => {
        cartao.addEventListener("focusin", function () {
            cartao.classList.add("cartao--focado");
        })

        cartao.addEventListener("focusout", function () {
            cartao.classList.remove("cartao--focado");
        })
    });

    // const opcoesCartao = document.querySelectorAll(".opcoesDoCartao-opcao");
    // opcoesCartao.forEach(opcao => {
    //     opcao.addEventListener("click", function (event) {
    //         const corSelecionada = event.target.style.color;

    //         const cartao = event.target.parentNode.parentNode;
    //         cartao.style.background = corSelecionada;
    //     })
    // });

    cartoes.forEach(cartao => {
        cartao.addEventListener("click", function (event) {
            if (event.target.classList.contains("opcoesDoCartao-opcao")) {
                const corSelecionada = event.target.style.color;
                // console.log(event.target.getAttribute("style"));

                const cartao = event.target.parentNode.parentNode;
                cartao.style.background = corSelecionada;
                // cartao.setAttribute("style", "background: " + corSelecionada);
            }
        });
    });
})()