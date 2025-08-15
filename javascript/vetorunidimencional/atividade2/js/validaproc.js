function validaProc(){


let soma=0;

let i;
let notas={}

for(i=1; i<=10; i++){
    notas[i] = parseFloat(document.getElementById("nota"+i));

    if(notas[i] >=7.5){
        
        soma = soma + notas[i];
        console.log("Aluno "+i+" - Aprovado com nota: "+notas[i]);
        console.log("Aluno "+(i+1)+" - Nota: "+notas[i]);
        

    }

}

}