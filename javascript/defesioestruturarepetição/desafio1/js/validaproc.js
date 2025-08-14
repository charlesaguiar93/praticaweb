function validaProc(){

let i = 1;
  
let numero1;
let numero2;
let soma;
let valor;
let resultado;

// Solicita os dois números ao usuário

numero1 = parseInt(prompt("Digite o primeiro número: "));
numero2 = parseInt(prompt("Digite o segundo número: "));

// Calcula a soma dos dois números

soma =  numero1 + numero2;

// Solicita ao usuário que informe o valor da soma até que ele acerte

do{


resultado = parseInt(prompt("Digite o valor da soma dos dois números: "));

if (resultado != soma){
    alert("Valor incorreto. Tente novamente.");

}
   


}while(resultado != soma);

alert("Parabéns! Você acertou a soma é: " + soma);

}







