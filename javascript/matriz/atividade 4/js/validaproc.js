function validaProc(){


    let matriz=[];
    let linhas = 2;
    let colunas =3;
    let linha;
    let soma = 0;
    
    
    for(i=0; i < linhas;  i++ ){
    
        matriz[i]=[]
        for(c=0; c < colunas; c++){
           
          matriz[i][c] = i + c;
          }
    }
    for(i=0; i < linhas; i++){
        
            for(c=0; c < colunas; c++){
    
            console.log("A linha:[" +i+ "] soma com a coluna:[" +c+"] resultado é:"+matriz[i][c])  
           document.write(matriz[i][c]+"&nbsp&nbsp");
           }
    
    document.write("<br>");  
    
    }
    return false;
    
    
    
    
    
    
    
    }