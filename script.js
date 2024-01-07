
var elementos = document.querySelectorAll('.player-options div>img');
var playerOpt = "";
var inimigoOpt = "";

var pontosPlayer = 0;
var pontosInimigo = 0;
function validarVitoria() {

    let vencedor = document.querySelector('.vencedor h1');
    let pontuacaoPlayer = document.querySelector('.player-options h3');
    let pontuacaoInimigo = document.querySelector('.enemy-options h3');
    
    if (playerOpt == 'papel') {

        if (inimigoOpt == 'papel') {
            vencedor.innerHTML = ("o jogo foi empate");
            
        }
        else if (inimigoOpt == 'tesoura') {
            vencedor.innerHTML = ('o inimigo ganhou');
            pontosInimigo = pontosInimigo + 1;
            pontuacaoInimigo.innerHTML = ('Pontos : '+pontosInimigo);
        }
        else if (inimigoOpt == 'pedra') {
            vencedor.innerHTML = ('o player ganhou')
            pontosPlayer = pontosPlayer + 1;
            pontuacaoPlayer.innerHTML = ('Pontos : '+pontosPlayer);
        }
    }

    if (playerOpt == 'pedra') {

        if (inimigoOpt == 'pedra') {
            vencedor.innerHTML = ("o jogo foi empate");
        }
        else if (inimigoOpt == 'papel') {
            vencedor.innerHTML = ('o inimigo ganhou');
            pontosInimigo = pontosInimigo + 1;
            pontuacaoInimigo.innerHTML = ('Pontos : '+pontosInimigo);
        }
        else if (inimigoOpt == 'tesoura') {
            vencedor.innerHTML = ('o player ganhou');
            pontosPlayer = pontosPlayer + 1;
            pontuacaoPlayer.innerHTML = ('Pontos : '+pontosPlayer);
        }
    }
    if (playerOpt == 'tesoura') {

        if (inimigoOpt == 'tesoura') {
            vencedor.innerHTML = ("o jogo foi empate");
        }
        else if (inimigoOpt == 'pedra') {
            vencedor.innerHTML = ('o inimigo ganhou');
            pontosInimigo = pontosInimigo + 1;
            pontuacaoInimigo.innerHTML = ('Pontos : '+pontosInimigo);
        }
        else if (inimigoOpt == 'papel') {
            vencedor.innerHTML = ('o player ganhou');
            pontosPlayer = pontosPlayer + 1;
            pontuacaoPlayer.innerHTML = ('Pontos : '+pontosPlayer);
        }
    }



}

function resetInimigo() {

    const enemyOptions = document.querySelectorAll('.enemy-options div');
    for (var i = 0; i < enemyOptions.length; i++) {

        enemyOptions[i].childNodes[0].style.opacity = 0.3;

    }
}

function inimigoJogar() {
    let rand = Math.floor(Math.random() * 3);

    const enemyOptions = document.querySelectorAll('.enemy-options div');

    resetInimigo();

    for (var i = 0; i < enemyOptions.length; i++) {
        if (i == rand) {
            enemyOptions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
        }

    }
    validarVitoria();
}


function resetOpacityPlayer() {
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.opacity = 0.3;

    }
}

for (var i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', function (t) {
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');


        inimigoJogar();

    });
}
