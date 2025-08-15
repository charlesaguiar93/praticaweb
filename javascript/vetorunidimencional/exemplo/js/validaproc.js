function validaProc(){

// Declarando as variáveis controladoras

let i;
 // declarando o vetor

 let num={};
 // Alimentando o vetor com dados

 for(i=0;i<3;i++){
    num[i]=parseInt(prompt("Digite o número "))
 }

 for(i=1; i<4; i++){
    
    console.log("na posição "+i+" temos o número "+num[i-1]);
    
        
    }
 
    return false;
}









