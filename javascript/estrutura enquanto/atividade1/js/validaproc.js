function validaProc() {
   
let i = 1;
somatoria = 0;
while (i <= 3) {

    numero = parseInt(prompt("Digite um número: "));
    somatoria = somatoria + numero;
    console.log("O número informado é " + numero);
   i = i + 1; 
    
    }

console.log("A somatória dos números informados é " + somatoria);
    return false;
}   
