function validaProc(){



let matriz={};
let linhas = 5;
let colunas = 5;
let multiplica = 0;
for(i=0; i < linhas; i++){

    matriz[i]=[]
    for(c=0; c < linhas; c++){

        matriz[i][c] = parseInt(prompt("Digite o número da "+(i+1)+" ª linha e "+(c+1)+"ª coluna:"));
          console.log("A linha:[" +i+ "] multiplica com a coluna:[" +c+"] resultado é:"+matriz[i][c]);  
          document.write(+matriz[i][c]+"&nbsp&nbsp");
        
        matriz[i][c] = matriz[i][c] * matriz[i][c];
    
    }
document.write("<br>");  
}

for(i=0; i < linhas; i++){

    for(c=0; c < colunas; c++){

        console.log("A linha:[" +i+ "] multiplica com a coluna:[" +c+"] resultado é:"+matriz[i][c]);  
        document.write(+matriz[i][c]+"&nbsp&nbsp");
    }
      document.write("<br>");  
}

return false;










}