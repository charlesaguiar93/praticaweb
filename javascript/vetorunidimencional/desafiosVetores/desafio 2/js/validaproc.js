function validaProc(){

let i;
let num={}
let valorUsuario;
let posicao = false; 


for(i=0; i<10; i++ ){
    num[i] = parseInt(prompt("Digite o "+(i+1)+"º número"));

}

valorUsuario = parseInt(prompt("Digite um valor inteiro:"));

for(i=0; i<10; i++){

    if (valorUsuario  === num[i]){
        posicao = true;
    console.log("O valor esta na posição [" +(i+1)+ "] do vetor");
    }
    

}

if(posicao === false){

    console.log("O valor não esta na posição do vetor");
}

return false


}