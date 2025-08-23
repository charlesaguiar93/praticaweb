function validaProc(){

let matriz=[];
let linhas = 4;
let colunas = 4;

for(i=0; i < linhas; i++ ){

    matriz[i]=[]
    for(c=0; c < colunas; c++){

        matriz[i][c] = parseInt(prompt("Digite o número da "+(i+1)+"ª linha e "+(c+1)+"ª coluna:"));
        document.write(matriz[i][c]+"&nbsp&nbsp"); 
       
        }
     document.write("<br>");
}


for(i=0; i < linhas; i++){

   console.log(matriz[i][i]+" | ")
   document.write(matriz[i][i]+"&nbsp&nbsp"); 
   document.write("<br>");
} 
    
       
    for(i=0; i < linhas; i++){
       
       console.log(matriz[i][3 - i]+" | ")
       document.write(matriz[i][3 - i]+"&nbsp&nbsp"); 
       // document.write("<br>");
        
    }        
   

return false;

}