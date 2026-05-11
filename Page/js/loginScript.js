
const display = document.getElementById("display");
const botao = document.getElementById("btnLogar");


function logar(){

const email = document.getElementById('IDemail').value.trim();
const senha = document.getElementById('IDsenha').value.trim();

   if( email == "jovinho@fiap.com.br" && senha == "123"){
    display.innerText = 'Conta criada com sucesso!'
   }
   else {
    display.innerText = 'Email ou senha incorretos';
    console.log(`email: ${email} e senha : ${senha}`);
   }
}

botao.addEventListener("click", logar); 