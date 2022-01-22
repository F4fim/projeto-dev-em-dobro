const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens() {

    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar');
    })
}

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}

/* 
    quando clicar na seta pra avançar temos que esconder todas as imagens e mostrar a proxima imagem
*/

setaAvancar.addEventListener('click', function () {

    // testa se o contador de imagemAtual é igual ao total de imagens

    const totalDeImagens = imagensPainel.length - 1;

    if (imagemAtual === totalDeImagens) {
        return;
    }

    /*
        a imagem atual começa em 0 pq é a primeira imagem ,assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens , pra poder saber que agora eu vou mostrar a segunda imagem
    */

    imagemAtual++;

    /*
        esconder todas as imagens  
        pegar todas as imagens usando o DOM e remover a classe mostrar 
    */

    esconderImagens();

    /*
        mostrar a proxima imagem 
        egar todas as imagens , descobrir qual é a proxima , e colocar a classe mostrar nela 
    */

    mostrarImagem();
});

/* 
    quando clicar na seta pra voltar temos que esconder todas as imagens e mostrar a imagem anterior
*/

setaVoltar.addEventListener('click', function () {


    if (imagemAtual === 0) {
        return;
    }

    imagemAtual--;

    /*
        esconder todas as imagens  
        pegar todas as imagens usando o DOM e remover a classe mostrar 
    */

    esconderImagens();
    /*
        mostrar a imagem anterior
        egar todas as imagens , descobrir qual é a panterior , e colocar a classe mostrar nela 
    */

    mostrarImagem();
})

