function validaProc(){


let i;
let valorNum={}


for(i=0; i<4; i++){

    valorNum[i] = parseInt(prompt("Digite o "+(i+1)+ "º número inteiro"));
}


for(i=3; i>=0; i--){

     console.log("Números em ordem inversa ["+valorNum[i]+"]");

}

return false



}