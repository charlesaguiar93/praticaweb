function validaProc(){

let i;

let notas={}

for(i=0; i<3; i++){
    notas[i]=parseFloat(prompt("Digite a nota do aluno "+(i+1)+":"));
    if(notas[i]>=7.5){
        console.log("Aluno "+(i+1)+" - Nota: "+notas[i]);
    }

}

}


/*faça um algoritimo para ler as notas obtidas pelos alunos, 
e depois exibir um relatório das notas iguais ou superiores a 7,5

3 alunos*/ 
