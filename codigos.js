
const lateralEsquerdo = document.querySelector('.lateralEsquerdo');
const lateralEsquerdo2 = document.querySelector('.lateralEsquerdo2');
const lateralEsquerdo3 = document.querySelector('.lateralEsquerdo3');

let preechimentoEsquerdo = false;
let preechimentoEsquerdo2 = false;
let preechimentoEsquerdo3 = false;

let jogadorAtual = 1;
let numJogadas = 0;
let vencedor = false;

lateralEsquerdo.addEventListener('click', function (e) {
    preechimentoEsquerdo = true;
    lateralEsquerdo.style.display = "flex";
    lateralEsquerdo.style.alignItems = "center";
    lateralEsquerdo.style.justifyContent = "center";
    if (jogadorAtual === 1) {
        lateralEsquerdo.innerHTML = `<img src="./imagens/chis.png" width="100px"> `
        jogadorAtual = 2;
    } else {
        lateralEsquerdo.innerHTML = `<img src="./imagens/bola.png" width="200px"> `
        jogadorAtual = 1;
    }
    numJogadas++;
    verificarLaterais();
    verificarEmpate();

});

lateralEsquerdo2.addEventListener('click', function (e) {
    preechimentoEsquerdo2 = true;
    lateralEsquerdo2.style.display = "flex";
    lateralEsquerdo2.style.alignItems = "center";
    lateralEsquerdo2.style.justifyContent = "center";
    if (jogadorAtual === 1) {
        lateralEsquerdo2.innerHTML = `<img src="./imagens/chis.png" width="100px"> `
        jogadorAtual = 2;
    } else {
        lateralEsquerdo2.innerHTML = `<img src="./imagens/bola.png" width="200px"> `
        jogadorAtual = 1;
    }
    numJogadas++;
    verificarLaterais();
    verificarEmpate();
});
lateralEsquerdo3.addEventListener('click', function (e) {
    preechimentoEsquerdo3 = true;
    lateralEsquerdo3.style.display = "flex";
    lateralEsquerdo3.style.alignItems = "center";
    lateralEsquerdo3.style.justifyContent = "center";
    if (jogadorAtual === 1) {
        lateralEsquerdo3.innerHTML = `<img src="./imagens/chis.png" width="100px"> `
        jogadorAtual = 2;
    } else {
        lateralEsquerdo3.innerHTML = `<img src="./imagens/bola.png" width="200px"> `
        jogadorAtual = 1;
    }
    numJogadas++;
    verificarLaterais();
    verificarEmpate();
});

const meio = document.querySelector('.meio');
const meio2 = document.querySelector('.meio2');
const meio3 = document.querySelector('.meio3');

let preechimentoMeio = false;
let preechimentoMeio2 = false;
let preechimentoMeio3 = false;

meio.addEventListener('click', function (e) {
    preechimentoMeio = true;
    meio.style.display = "flex";
    meio.style.alignItems = "center";
    meio.style.justifyContent = "center";
    if (jogadorAtual === 1) {
        meio.innerHTML = `<img src="./imagens/chis.png" width="100px"> `
        jogadorAtual = 2;
    } else {
        meio.innerHTML = `<img src="./imagens/bola.png" width="200px"> `
        jogadorAtual = 1;
    }
    numJogadas++;
    verificarLaterais();
    verificarEmpate();

});

meio2.addEventListener('click', function (e) {
    preechimentoMeio2 = true;
    meio2.style.display = "flex";
    meio2.style.alignItems = "center";
    meio2.style.justifyContent = "center";
    if (jogadorAtual === 1) {
        meio2.innerHTML = `<img src="./imagens/chis.png" width="100px"> `
        jogadorAtual = 2;
    } else {
        meio2.innerHTML = `<img src="./imagens/bola.png" width="200px"> `
        jogadorAtual = 1;
    }
    numJogadas++;
    verificarLaterais();
    verificarEmpate();
});

meio3.addEventListener('click', function (e) {
    preechimentoMeio3 = true;
    meio3.style.display = "flex";
    meio3.style.alignItems = "center";
    meio3.style.justifyContent = "center";
    if (jogadorAtual === 1) {
        meio3.innerHTML = `<img src="./imagens/chis.png" width="100px"> `
        jogadorAtual = 2;
    } else {
        meio3.innerHTML = `<img src="./imagens/bola.png" width="200px"> `
        jogadorAtual = 1;
    }
    numJogadas++;
    verificarLaterais();
    verificarEmpate();
});

const lateraDireito = document.querySelector('.lateraDireito');
const lateraDireito2 = document.querySelector('.lateraDireito2');
const lateraDireito3 = document.querySelector('.lateraDireito3');

let preechimentolateraDireito = false;
let preechimentolateraDireito2 = false;
let preechimentolateraDireito3 = false;

lateraDireito.addEventListener('click', function (e) {
    preechimentolateraDireito = true;
    lateraDireito.style.display = "flex";
    lateraDireito.style.alignItems = "center";
    lateraDireito.style.justifyContent = "center";
    if (jogadorAtual === 1) {
        lateraDireito.innerHTML = `<img src="./imagens/chis.png" width="100px"> `
        jogadorAtual = 2;
    } else {
        lateraDireito.innerHTML = `<img src="./imagens/bola.png" width="200px"> `
        jogadorAtual = 1;
    }
    numJogadas++;
    verificarLaterais();
    verificarEmpate();

});

lateraDireito2.addEventListener('click', function (e) {
    preechimentolateraDireito2 = true;
    lateraDireito2.style.display = "flex";
    lateraDireito2.style.alignItems = "center";
    lateraDireito2.style.justifyContent = "center";
    if (jogadorAtual === 1) {
        lateraDireito2.innerHTML = `<img src="./imagens/chis.png" width="100px"> `
        jogadorAtual = 2;
    } else {
        lateraDireito2.innerHTML = `<img src="./imagens/bola.png" width="200px"> `
        jogadorAtual = 1;
    }
    numJogadas++;
    verificarLaterais();
    verificarEmpate();
});

lateraDireito3.addEventListener('click', function (e) {
    preechimentolateraDireito3 = true;
    lateraDireito3.style.display = "flex";
    lateraDireito3.style.alignItems = "center";
    lateraDireito3.style.justifyContent = "center";
    if (jogadorAtual === 1) {
        lateraDireito3.innerHTML = `<img src="./imagens/chis.png" width="100px"> `
        jogadorAtual = 2;
    } else {
        lateraDireito3.innerHTML = `<img src="./imagens/bola.png" width="200px"> `
        jogadorAtual = 1;
    }
    numJogadas++;
    verificarLaterais();
    verificarEmpate();
});

function verificarEmpate() {
    if (numJogadas === 9 && !vencedor) {
      alert("Empate!");
    }
  }
function verificarLaterais() {
   
    const tabuleiro = [[lateralEsquerdo, meio, lateraDireito],
    [lateralEsquerdo2, meio2, lateraDireito2],
    [lateralEsquerdo3, meio3, lateraDireito3]
    ];

        // Verificar linhas
        

        for (let i = 0; i < 3; i++) {
            if (
                tabuleiro[i][0].innerHTML !== '' &&
                tabuleiro[i][0].innerHTML === tabuleiro[i][1].innerHTML &&
                tabuleiro[i][1].innerHTML === tabuleiro[i][2].innerHTML
            ) {
                return  quemGanhou()
               
            }
        }
        // Verificar colunas
        for (let i = 0; i < 3; i++) {
            if (
                tabuleiro[0][i].innerHTML !== '' &&
                tabuleiro[0][i].innerHTML === tabuleiro[1][i].innerHTML &&
                tabuleiro[1][i].innerHTML === tabuleiro[2][i].innerHTML
            ) {
               
             return quemGanhou()
                    
             
            }
        }
        // Verificar diagonal principal
        if (
            tabuleiro[0][0].innerHTML !== '' &&
            tabuleiro[0][0].innerHTML === tabuleiro[1][1].innerHTML &&
            tabuleiro[1][1].innerHTML === tabuleiro[2][2].innerHTML
        ) {
            return  quemGanhou()
            
        }

        // Verificar diagonal secundária
        for (let i = 0; i < 3; i++) {
        if (
            tabuleiro[0][2].innerHTML !== '' &&
            tabuleiro[0][2].innerHTML === tabuleiro[1][1].innerHTML &&
            tabuleiro[1][1].innerHTML === tabuleiro[2][0].innerHTML
        ) {
            return  quemGanhou()
        }
    }
    }
   
function quemGanhou(){
    if(jogadorAtual === 1){
        alert(`jogador um ganhou `);

       }else{
        alert(`jogador dois ganhou `);
       } 
}
 const btnReiniciar = document.querySelector('.btnReiniciar')
    btnReiniciar.addEventListener('click',(e) =>{
        
        if (jogadorAtual === 1) {
            lateraDireito.innerHTML = ``
            jogadorAtual = 2;
        } else {
            lateraDireito.innerHTML = ``
            jogadorAtual = 1;
        }if (jogadorAtual === 1) {
            lateraDireito2.innerHTML = ` `
            jogadorAtual = 2;
        } else {
            lateraDireito2.innerHTML = ` `
            jogadorAtual = 1;
        }
        if (jogadorAtual === 1) {
            lateraDireito3.innerHTML = ` `
            jogadorAtual = 2;
        } else {
            lateraDireito3.innerHTML = ``
            jogadorAtual = 1;
        }
        if (jogadorAtual === 1) {
            lateralEsquerdo.innerHTML = ``
            jogadorAtual = 2;
        } else {
            lateralEsquerdo.innerHTML = ``
            jogadorAtual = 1;
        }
        if (jogadorAtual === 1) {
            lateralEsquerdo2.innerHTML = ` `
            jogadorAtual = 2;
        } else {
            lateralEsquerdo2.innerHTML = ` `
            jogadorAtual = 1;
        }
        if (jogadorAtual === 1) {
            lateralEsquerdo3.innerHTML = ``
            jogadorAtual = 2;
        } else {
            lateralEsquerdo3.innerHTML = ``
            jogadorAtual = 1;
        }
        if (jogadorAtual === 1) {
            meio.innerHTML = ``
            jogadorAtual = 2;
        } else {
            meio.innerHTML = ``
            jogadorAtual = 1;
        }
        if (jogadorAtual === 1) {
            meio2.innerHTML = ``
            jogadorAtual = 2;
        } else {
            meio2.innerHTML = ` `
            jogadorAtual = 1;
        }
        if (jogadorAtual === 1) {
            meio3.innerHTML = ` `
            jogadorAtual = 2;
        } else {
            meio3.innerHTML = ` `
            jogadorAtual = 1;
        }
        numJogadas = 0;
        
    });
const nomesJogadores = document.querySelector('.nomesJogadores')
    nomesJogadores.addEventListener('click',(e)=>{
        const nomeUm = prompt('Nome primeiro jogador:');
        const nomeDois = prompt('Nome segundo jogador:');
        const saida1 = document.querySelector('.nome1');
        const saida2 = document.querySelector('.nome2');
        numJogadas = 0;
    saida1.innerHTML= `<p>Player 1 : ${nomeUm}</p>`
    saida2.innerHTML= `<p>Player 2 : ${nomeDois}</p>`  
    });


    





   