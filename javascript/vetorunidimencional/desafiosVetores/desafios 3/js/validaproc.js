function validaProc(){

let i;
let valores={}
let valorUsuario;
let multValor;

for(i=0; i<5; i++){

    valores[i] = parseInt(prompt("Digite o " + (i+1)+"º número"));
}

valorUsuario = parseInt(prompt("Digite um número inteiro"));


for(i=0; i<5; i++){

multValor = valorUsuario * valores[i]
 console.log("Posição ["+(i+1)+"] - Valor: [" +valores[i]+ "] com o resultado: " + multValor);

}
return false



}