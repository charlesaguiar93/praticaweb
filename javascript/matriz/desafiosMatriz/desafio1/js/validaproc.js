function validaProc(){

let matriz=[];
let linhaAndar = 6;
let colunApart = 4;
let soma = 0;
let media;

for(i=0; i < linhaAndar; i++){

    matriz[i]=[]
    for(c=0; c < colunApart; c++){

        matriz[i][c] = parseFloat(prompt("Digite a renda do"+(i+1)+"ª andar"+(c+1)+"ª apartamento renda:"));
   
        soma += matriz[i][c]
        
    }


}
media = soma / 24
        console.log("A média de renda dos apartamentos é:"+media);
        console.log("O total de da renda dos apartamentos são:"+soma);

return false







}

