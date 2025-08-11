function procFormulario(){

    //validação de campo
    if(document.fmrnotas.txtnum1.value==""){

            alert("Preencha o campo Nota 1");
            document.frmnotas.txtnum1.focus();
            return false;



    }else if(document.fmrnotas.txtnum2.value==""){

            alert("Preencha o campo Nota 2");
            document.fmrnotas.txtnum2.focus();
            return false;

    }else if(document.fmrnotas.txtnum3.value==""){

         alert("Preencha o campo Nota 3");
         document.fmrnotas.txtnum3.focus();
         return false;   
       
        }else{

              //Processamento do programa...
              //let é uma variavél para cálculo javascript
              let nota1 = parseFloat(document.getElementById('num1').value);
              let nota2 = parseFloat(document.getElementById('num2').value);
              let nota3 = parseFloat(document.getElementById('num3').value);
              let media=(nota1+nota2+nota3)/3;
              if(media>=7){

                    alert("Sua media foi " + media.toFixed(2) + " Você foi aprovado");

              }else if(media < 7.0){

                       alert("Sua media foi"+ media.toFixed(2)+ "Você está em recuperação"); 
              
            }else {

                alertt("sua media foi de "+ media.toFixed(2)+" você foi aprovado");
            }
                

        
        
        
            }






}