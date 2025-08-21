function validaProc(){


let matriz=[];
let linhas = 4;
let colunas = 3;
let soma = 0;

for(i=0; i < linhas; i++){

    matriz[i]=[]
    for(c=0; c < colunas; c++){

        matriz[i][c] = parseFloat(prompt("Digite o número da "+i+" ª linha"+c+"ª coluna:"));
        soma += matriz[i][c];
        
    }
}
 console.log("A soma dos elementos da matriz é:"+soma)  


return false






}