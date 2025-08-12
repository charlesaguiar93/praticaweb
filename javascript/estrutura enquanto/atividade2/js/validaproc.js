function validaProc(){

    let i = 1;
    let maior = 0;
    let numero;
    while (i <= 3) {
        
        let numero = parseInt(prompt("Digite um número: "));
        console.log("O número informado é " + numero);
       if (numero > maior) {
            maior = numero;
        }
        i= i + 1;
    }   


    console.log("O número maior  é " +maior);
    return false;


}