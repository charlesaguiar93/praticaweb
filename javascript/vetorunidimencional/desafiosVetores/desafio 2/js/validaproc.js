function validaProc(){

let i;
let num={}
let valorUsuario = false

for(i=0; i<10; i++ ){
    num[i] = parseInt(prompt("Digite o "+(i+1)+"º número"));

}

valorUsuario = parseInt(prompt("Digite um valor inteiro:"));


for(i=0; i<10; i++){
if(valorUsuario === num[i]  ){
    
     console.log("O valor esta na posição ["+(i + 1)+ "] do vetor");
    
    }
    
    else if(valorUsuario == false){
                                                                
            console.log("O valor não se encontra no vetor!");
    }    
   
}   
return false;


}