function validaProc(){


let matriz=[];
let linhas = 2;
let colunas = 2;
let soma =0; 

for(i=0; i < linhas; i++){

    matriz[i]=[]
    for(c=0; c < colunas; c++){

        matriz[i][c] = parseInt(prompt("Digite o número da "+(i+1)+" ª linha e "+(c+1)+"ª coluna:"));
        
        matriz[i][c] = matriz[i][c] + matriz[i][c];
        soma += matriz[i][c];
    
     console.log("A linha:[" +i+ "] soma com a coluna:[" +c+"] resultado é:"+matriz[i][c]);  
           document.write(matriz[i][c]+"&nbsp&nbsp");
    
    }
document.write("<br>");  
}
console.log("A soma de todos os elementos da matriz é:"+soma)
return false;









}