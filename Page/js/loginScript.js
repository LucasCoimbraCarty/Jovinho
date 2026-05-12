
const display = document.getElementById("display");
const botao = document.getElementById("btnLogar");


function logar(){

const email = document.getElementById('IDemail').value.trim();
const senha = document.getElementById('IDsenha').value.trim();

   if( email == "jovinho@fiap.com.br" && senha == "123"){
   //  display.innerText = 'Conta logada com sucesso!'
   alert('Conta logada com sucesso!')
   }
   else {
   //  display.innerText = 'Email ou senha incorretos';
    alert('Conta logada com sucesso!')
    console.log(`email: ${email} e senha : ${senha}`);
   }
}

botao.addEventListener("click", logar); 