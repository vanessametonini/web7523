; (function () {

    'use strict'

    let form = document.querySelector('.formNovoCartao'),
        textarea = document.querySelector('.formNovoCartao-conteudo'),
        mural = document.querySelector('.mural'),
        numeroDoCartao = 1


    form.addEventListener('submit', function (eventoSubmit) {
        eventoSubmit.preventDefault()

        textarea.value = textarea.value.trim()

        if (textarea.value == "") {
            // criar elemento de mensagem => document.createElement

            let msgErro = document.createElement('p')
            // adicionar uma mensagem no elemento => variavel.textContent = ''
            msgErro.textContent = 'Por favor digite uma mensagem'
            // adicionar classe no elemento => 
            msgErro.classList.add('formNovoCartao-msg')
            // adicionar a mensagem antes do botao => insertAdjacentElement

            form.insertAdjacentElement('afterend', msgErro)

            //para quando eu precisar criar um elemento dentro de uma string
            //form.insertAdjacentHTML('afterend', '<p class="formNovoCartao-msg">testeee</p>')

            //para quando eu precisa inserir texto
            //form.insertAdjacentText('afterend','somente texto nao entende tags')

            //quando o evento animationend no msgErro acontecer
            msgErro.addEventListener('animationend', function () {
                //remover o msgErro
                this.remove()
            })

        }
        else {

            let conteudoCartao = `
                <div class="opcoesDoCartao">
                    <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                        <svg>
                            <use xlink:href="#iconeRemover"></use>
                        </svg>
                    </button>

                    <input type="radio" name="corDoCartao${numeroDoCartao}" value="#EBEF40" id="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo" checked>
                    <label for="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
                        Padrão
                    </label>

                    <input type="radio" name="corDoCartao${numeroDoCartao}" value="#F05450" id="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
                    <label for="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
                        Importante
                    </label>

                    <input type="radio" name="corDoCartao${numeroDoCartao}" value="#92C4EC" id="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
                    <label for="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
                        Tarefa
                    </label>

                    <input type="radio" name="corDoCartao${numeroDoCartao}" value="#76EF40" id="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
                    <label for="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
                        Inspiração
                    </label>
                </div>
                <p class="cartao-conteudo" contenteditable tabindex="0">${textarea.value}</p>
            `

            let cartao = document.createElement('article')
            cartao.setAttribute('id', `cartao_${numeroDoCartao}`)
            cartao.setAttribute('tabindex',0)
            cartao.classList.add('cartao')
            cartao.innerHTML = conteudoCartao


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

            numeroDoCartao++
            mural.insertAdjacentElement('afterbegin', cartao)


            //para limpar 1 campo
            //textarea.value = ''

            //para limpar todos os campos do formulário
            form.reset()
        }

    })

})()