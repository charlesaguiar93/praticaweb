function validaProc(){

let matriz=[];
let linhas = 4;
let colunas = 4;

for(i=0; i < linhas; i++ ){

    matriz[i]=[]
    for(c=0; c < colunas; c++){

        matriz[i][c] = parseInt(prompt("Digite o número da "+(i+1)+"ª linha e "+(c+1)+"ª coluna:"));
    
       
        
        //console.log("Linha é"+(i+1)+"ª linha e"+(c+1)+"ª coluna"+ matriz[i][c]);
        
        
    
    }
    
}

for(i=0; i < linhas; i++){
console.log(matriz[i][i],"|")
document.write(matriz[i][i]+"&nbsp&nbsp"); 
document.write("<br>");
} 
    for(i=0; i < linhas; c++){

        
        console.log(matriz[i][3 - 1],"|")
        document.write(matriz[i][3 - 1]+"&nbsp&nbsp"); 
        document.write("<br>");
    
    }        
   

return false;






//console.log(prompt("A linha:[" +i+ "] coluna:[" +c+"] :"+matriz[i][i]));
    //console.log(prompt("A linha:[" +i+ "] [" +c+"] :"+matriz[i][3 - i]));
    











}