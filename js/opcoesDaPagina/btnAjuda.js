;(function () {
    'use strict'

    let btnAjuda = document.querySelector('#btnAjuda')

    //Arrays, indice 0, estrutra de lista
    let informacoes = [
        "Bem vindo ao Ceep!",
        "Clique no botao linhas para mudar o layout",
        "O site é otimizado para celulares"
    ]

    btnAjuda.addEventListener('click', function() {
        
        // informacoes.forEach(function(info){
        //     alert(info)
        // });        

        //pega o conteudo
        for(let info of informacoes){
            alert(info)
        }

        //Pega o indice
        // for (let info in informacoes) {
        //     alert(info)
        // }

    })    


    btnAjuda.classList.remove('no-js')

})()