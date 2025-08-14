validaProc = function() {

let i = 1;    
let idade;
let genero;
let salario;
let finalizar;
let somalario = 0.0; salariomasculino = 0.0; salariofeminino = 0.0;
let qtdsalarios = 0; somaidade = 0; qtdidade = 0; qtmasculino = 0; qtfeminino = 0;
let mediasalario;
let mediaidade;
let mediafeminino;
let mediamasculino;



do {

    

idade = parseInt(prompt("Digite sua idade: "));
genero = prompt("Digite seu gênero (M/F): ").toUpperCase();
salario = parseFloat(prompt("Digite seu salário: "));

somalario += salario;
qtdsalarios = qtdsalarios + 1;
mediasalario = somalario / qtdsalarios;

somaidade += idade;
qtdidade = qtdidade + 1;
mediaidade = somaidade / qtdidade;      

if (genero === "F" || genero === "f") {

salariofeminino += salario;
qtfeminino = qtfeminino + 1;
mediafeminino = salariofeminino / qtfeminino; 

}

if (genero === "M" || genero === "m") {
salariomasculino += salario;
qtmasculino = qtmasculino + 1;
mediamasculino = salariomasculino / qtmasculino; 
}     

finalizar = prompt("Digite 'finalizar' para encerrar ou qualquer outra coisa para continuar: ").toLowerCase();  

}while(finalizar !== "finalizar");


mediasalario = prompt("A média dos salários é: " + mediasalario.toFixed(2));
mediaidade = prompt("A média das idades é: " + mediaidade.toFixed(2));  
mediafeminino = prompt("A média dos salários femininos é: " + mediafeminino);
mediamasculino = prompt("A média dos salários masculinos é: " + mediamasculino); 





}



