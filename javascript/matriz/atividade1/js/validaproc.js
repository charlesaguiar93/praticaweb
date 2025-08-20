function validaProc(){


let matriz=[];
let linhas = 3;
let colunas = 3;
let num;
let soma;

for(i=0; i< linhas; i++){

matriz[i]=[]
for(c=0; c < colunas; c++){

matriz[i][c] = parseInt(prompt("Digite o "+(i+1)+" º número da linha "+ (c+1 ) +"º da coluna"))

}


}

num = parseInt(prompt("Digite um número inteiro"));


for(i=0; i< linhas; i++){

    
    for(c=0; c < colunas; c++){
   soma = num * matriz[i][c]
        document.write(soma+"&nbsp&nbsp");
        console.log("O número multiplicado é"+ soma);
    }

    document.write("<br>");
}

return false





}


//Alimentar uma matriz (3x3) de valores inteiros, multiplicando essa matriz por um valor informado
//pelo usuário e escrevendo o conteúdo da matriz multiplicda.// 