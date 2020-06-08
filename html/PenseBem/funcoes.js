var num, programa, tentativa, pontos;
var gabarito = new Array(30);

var gabarito021 = new Array('B', 'A', 'A', 'D', 'C', 'B', 'D', 'A', 'A', 'D', 'C', 'B', 'B', 'C', 'D', 'D', 'D', 'D', 'B', 'D', 'A', 'B', 'A', 'A', 'D', 'A', 'C', 'A', 'C', 'C');
var gabarito022 = new Array('B', 'D', 'A', 'A', 'A', 'B', 'D', 'A', 'C', 'A', 'C', 'C', 'B', 'D', 'D', 'B', 'C', 'D', 'C', 'D', 'D', 'D', 'A', 'C', 'A', 'A', 'B', 'C', 'A', 'A');
var gabarito023 = new Array('B', 'A', 'D', 'B', 'B', 'B', 'C', 'D', 'C', 'D', 'D', 'D', 'A', 'C', 'A', 'B', 'A', 'D', 'B', 'A', 'D', 'B', 'B', 'D', 'D', 'C', 'B', 'D', 'B', 'C');
var gabarito024 = new Array('B', 'A', 'D', 'B', 'B', 'D', 'C', 'C', 'C', 'B', 'A', 'D', 'B', 'A', 'D', 'B', 'D', 'A', 'B', 'B', 'D', 'A', 'B', 'D', 'A', 'B', 'C', 'C', 'D', 'D');
var gabarito025 = new Array('C', 'C', 'D', 'D', 'A', 'A', 'C', 'D', 'B', 'B', 'D', 'D', 'B', 'B', 'D', 'D', 'C', 'B', 'B', 'B', 'D', 'A', 'B', 'D', 'D', 'D', 'C', 'D', 'C', 'B');

function iniciar() {
    programa = window.prompt("Digite o número do programa:", "");

    if (programa == "021")
        gabarito = gabarito021;
    else if (programa == "022")
        gabarito = gabarito022;
    else if (programa == "023")
        gabarito = gabarito023;
    else if (programa == "024")
        gabarito = gabarito024;
    else if (programa == "025")
        gabarito = gabarito025;
    else {
        window.alert("Número de Programa Inválido!!!\nDigite entre 021 e 025!!!");
        iniciar();
    }

    pontos = 0;
    num = 1;
    tentativa = 1;

    document.getElementById('visor1').value = programa + "->" + num + ": ";
    document.getElementById('visor2').value = "Tentativa " + tentativa + " de 3";
}

function jogar(resposta) {
    document.getElementById('visor1').value = programa + "->" + num + ":" + resposta;

    if (resposta == gabarito[num - 1])
        pontos++;

    num++;

    if (num > 30) {
        document.getElementById('visor1').value = "***FIM***";
        document.getElementById('visor2').value = "Pontuação: " + pontos;
    }
}