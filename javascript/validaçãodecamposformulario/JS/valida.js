function validaformulario()



{
   /// alert("Testando o javaScript");
   if(document.frmcadastro.txtnome.value==""){

       alert("Preencha o campo Nome");
        document.frmcadastro.txtnome.focus();


}else if(document.frmcadastro.txtfone.value==""){

          alert("Preencha o campo Telefone");
           documento.frmcadastro.txtfone.focus();
            return false;

}else if(document.frmcadastro.txtemail.value=="")
{

          alert("Preencha a campo E-mail");
           document.frmcadastro.txtemail.focus();
             return false

}
else
{
  alert("Tudo certo, até a próxima ");
  return false

}





}