function validaProc(){





let matriz=[];
let linhas = 2;
let colunas = 2;

let matriz2=[]
let linha = 2;
let coluna = 2; 


for(i=0; i < linhas; i++){

    matriz[i]=[]
    for(c=0; c < linhas; c++){

        matriz[i][c] = parseInt(prompt("Digite o número da "+(i+1)+" ª linha e "+(c+1)+"ª coluna:"));
          console.log("A linha:[" +i+ "] multiplica com a coluna:[" +c+"] resultado é:"+matriz[i][c]);  
          document.write(+matriz[i][c]+"&nbsp&nbsp");
        
        
    
    }
document.write("<br>");  
}



for(i=0; i < linha; i++){

    matriz2[i]=[]
    for(c=0; c < coluna; c++){
        matriz[i][c] = matriz[i][c] * matriz[i][c];
        
        console.log("A linha:[" +i+ "] multiplica com a coluna:[" +c+"] resultado é:"+matriz[i][c]);  
        document.write(+matriz[i][c]+"&nbsp&nbsp");
    }
      document.write("<br>");  
}

return false;










}