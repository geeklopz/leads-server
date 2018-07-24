var zeroDezesseteV = 0;
var zeroDezesseteI = 0;
var dezoitoVinteCincoV = 0;
var dezoitoVinteCincoI = 0;
var vinteSeisTrintaNoveV = 0;
var vinteSeisTrintaNoveI = 0;
var quarentaMaisV = 0;
var quarentaMaisI = 0;



var tdItemListValores = document.getElementsByClassName("itemLista");

for (var i = 0; i < tdItemListValores.length; i++) {
    var vlr = (parseInt(tdItemListValores[i].textContent));

    if (!(eval(vlr)))
        vlr = 0;

    if (vlr < 18) zeroDezesseteV = zeroDezesseteV + 1;
    else {
        if (vlr < 25) dezoitoVinteCincoV++;
        else {
            if (vlr < 36) vinteSeisTrintaNoveV++;
            else quarentaMaisV++;
        }
    }
}

var tdItemListIdades = document.getElementsByClassName("itemListaIdade");

for (var i = 0; i < tdItemListIdades.length; i++) {
    var vlr = (parseInt(tdItemListIdades[i].textContent));

    if (!(eval(vlr)))
        vlr = 0;

    if (vlr < 18) zeroDezesseteI++;
    else {
        if (vlr < 25) dezoitoVinteCincoI++;
        else {
            if (vlr < 36) vinteSeisTrintaNoveI++;
            else quarentaMaisI++;
        }
    }
}


geraGrafico(document.getElementsByClassName("line-chart"));

function geraGrafico(ctx) {

    var chartGraph = new Chart(ctx, {
        type: 'bar',
        backgroundColor: "#fff",
        data: {
            labels: ["18 ~ 25", "25 ~ 40", "40+"],
            datasets: [/* {
                label: "Idade dos Leads",
                data: [dezoitoVinteCincoV, vinteSeisTrintaNoveV, quarentaMaisV],
                borderColor: "rgb(77,208,225)",
                backgroundColor: "rgb(77,208,225)"
            },  */{
                label: "Quantidade de Leads por Idade",
                data: [dezoitoVinteCincoI, vinteSeisTrintaNoveI, quarentaMaisI],
                borderColor: "rgb(228, 38, 88)",
                backgroundColor: "rgb(228, 38, 88)"
            }]
        },
        options: {
            maintainAspectRatio: false,
            title: {
                display: true,
                fontSize: 27,
                text: "Gráfico de Leads",
            }
        }
    });
}