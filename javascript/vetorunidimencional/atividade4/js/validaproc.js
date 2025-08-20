function validaProc(){

let i;
let numeros={}

for(i=0; i<10; i++){

    numeros[i] = parseFloat(prompt("Digite o número " + (i+1) + ":"));
    console.log("O número informado para a posição "+i+"é :"+numeros[i]);

}

for(i=0; i<10; i++){

    if(i%2 != 0){

       console.log("A posição é "+i+" e o número é "+numeros[i]);

    }
   
}

return false




}