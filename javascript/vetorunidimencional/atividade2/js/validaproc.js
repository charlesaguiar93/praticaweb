function validaProc(){


let quantidade=0;

let i;
let notas={}

for (i=0; i< 3; i++){
    notas[i] = parseFloat(prompt("Digite a nota do aluno " + (i + 1) + ":"));
    
}

for (i=0; i< 3; i++){
    
    
    if (notas[i] >= 7.5) {
        quantidade++;
        console.log("Nota do aluno superior a 7,5 posição " + (i + 1) + ": " + notas[i]);
       
    
    }
       

}
console.log("Quantidade de notas iguais ou superior a 7,5: " + quantidade);
return false;

}

/*faça um programa para ler as notas obtidas pelos alunos, e depois exibir um relatório
das notas iguais ou superior a 7,5 e também 
no final a quantidade de notas iguais ou superior a 7,5*/