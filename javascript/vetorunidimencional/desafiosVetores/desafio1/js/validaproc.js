function validaProc(){

let i;
let notas1={}; notas2={};
let mediaNotas={};

for(i=0; i<5; i++){
    notas1[i] = parseFloat(prompt("Digite a primeira, nota do bimestre: " + (i+1)+ "º nota:"))
}

for(i=0; i<5; i++){
    notas2[i] = parseFloat(prompt("Digite a segunda nota do bimestre:"+(i+1)+ "º nota:"))

}

for(i=0; i<5; i++){

mediaNotas[i] = (notas1[i] + notas2[i]) / 2

mediaNotas[i] = prompt("A média do "+(i+1)+"º aluno é: " + mediaNotas[i]);


}









}