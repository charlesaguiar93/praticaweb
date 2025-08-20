function validaProc(){


let matriz=[];
let linhas = 2;
let colunas = 2;
let soma = 0;

for(i=0; i < linhas; i++){

    matriz[i]=[]
    for(c=0; c < colunas;){
       
        matriz[i][c]= parseInt(prompt("Digite o valor da linha " + i + "º coluna"+c));
     
    }
}
 
/*for(i=0; i< linhas; i++){

    for(c=0; c < colunas; c++){

    soma = soma + matriz[i][c];
          

        console.log("Posição "+i+" - Valor: "+soma);

    }
}*/

return false;






}