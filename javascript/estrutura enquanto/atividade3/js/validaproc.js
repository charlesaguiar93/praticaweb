function validaProc(){

let i = 1;
let soma = 0;
let numero;
while (i <= 3) {
    
     numero = parseInt(prompt("Digite um número: "));
    console.log("O número informado é " + numero);
   if (numero > 0) {
       // numeropositivo = numeropositivo + 1;
        if (numero%5 == 0){


            console.log("O número " + numero + " é positivo. e divisivel por 5");

            soma = soma + numero;

        }

        
          

    }
    i= i + 1;


}
console.log("A soma dos números divisiveis por é " +soma);
}
