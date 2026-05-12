const botao = document.getElementById("btnLogar");

function criarConta(){
const email = document.getElementById('IDemail').value.trim();
const senha = document.getElementById('IDsenha').value.trim();

   if( email.indexOf("@") !== -1 && senha.length >= 5){
   alert('Conta criada com sucesso!')
   }
   else if(email.indexOf("@") == -1 && senha.length >= 5) {
    alert('Email inválido')
    console.log(`email inválido: ${email}`);
   } 
   else if(email.indexOf("@") !== -1 && senha.length <= 5) {
    alert('A senha precisa de no mínimo 5 caracteres')
    console.log(`senha inválida: ${senha}`);
   }
   else {
    alert('Email e senha inválidos')
    console.log(`email: ${email} e senha : ${senha}`);
   }
}

botao.addEventListener("click", criarConta); 