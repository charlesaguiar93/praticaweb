function validaProc(){


let matriz=[];
let linhas = 2;
let colunas =2;
let linha;
let soma = 0;


for(i=0; i < linhas; i++ ){

    matriz[i]=[]
    for(c=0; c < colunas; c++){
       
      matriz[i][c] = i + c;
      
       
    }


    }

 
  for(i=0; i < linhas; i++){
    
        for(c=0; c < colunas; c++){

        console.log("Os valor das posições"+matriz[i][c])  
       document.write(matriz[i][c]+"&nbsp&nbsp");
       
}

document.write("<br>");  
/*console.log("Posição "+i+" - Valor: "+matriz[i][c]);*/
}




return false;







}



// matriz[i][c] = parseInt(prompt("Digite o "+(i+1)+"º número da linha e da "+(c+1)+"ª coluna:"));

// criar, alimentar e imprimir os dados de uma matriz 