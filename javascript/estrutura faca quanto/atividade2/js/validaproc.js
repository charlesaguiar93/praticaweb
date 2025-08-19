function validaproc(){

    const num1Input = document.getElementById("num1");
    if (num1Input.value == "") 
    {
        alert("Por favor, informe o primeiro número.");
        num1Input.focus();
        return;
    }
    const num1 = parseFloat(num1Input.value);
    let resultadoFinal;
    for(let i=1;i<11;i++){
        resultadoFinal= num1 * i
        console.log(num1+"x"+i+"="+resultadoFinal)
    }
    return false;
}