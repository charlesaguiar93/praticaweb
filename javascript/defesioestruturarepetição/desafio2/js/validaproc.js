function validaProc(){

let peso;
let altura;
let imc;
let numero;

do{
    //numero = parseInt(prompt("Digite 0 para sair ou qualquer outro número para continuar:"));
    
    peso = parseFloat(prompt("Digite seu peso em kg:"));
    altura = parseFloat(prompt("Digite sua altura em metros:"));
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
    } else {
        imc = peso / (altura * altura);
        alert("Seu IMC é: " + imc.toFixed(2));
    }
    if (numero !== 0) {
        numero = parseInt(prompt("Digite 0 para sair ou qualquer outro número para continuar:"));   
}}while (numero != 0);



}