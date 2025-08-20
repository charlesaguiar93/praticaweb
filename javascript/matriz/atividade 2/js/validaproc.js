function validaProc(){


let matriz=[];
let linhas = 2;
let colunas = 2;
let linha;
let soma = 0;
let posicao = false;


for(i=0; i < linhas; i++ ){

    matriz[i]=[]
    for(c=0; c < colunas; c++){

        matriz[i][c] = parseInt(prompt("Digite o "+(i+1)+"º número da linha e da "+(c+1)+"ª coluna:"));
    }


    }


linha = parseInt(prompt("Digite qual linha da matriz deseja somar 0 ou 1:"))



    if(linha >=2){
   
    console.log("Linha da matriz errada digite 0 ou 1");
  }

    if(linha >= 0 || linha < 2 ){
      posicao = true;  
    
    
        for(c=0; c < colunas; c++){

    soma += matriz[linha][c];     
       document.write(soma+"&nbsp&nbsp");
}
document.write("<br>");  
    console.log("A soma da linha[",linha,"] é :"+soma);
}




return false;







}