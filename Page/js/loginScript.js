const botao = document.getElementById("btnLogar");
const botaoReport = document.getElementById("btnReportar");

function logar(){
const email = document.getElementById('IDemail').value.trim();
const senha = document.getElementById('IDsenha').value.trim();

   if( email == "jovinho@fiap.com.br" && senha == "123"){
   alert('Conta logada com sucesso!')
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
    alert('Email ou senha incorretos')
    console.log(`email: ${email} e senha : ${senha}`);
   }
}

function Reportar() {
  let report = prompt("Reporte o problema em seu login", "");
  if (report != null) {
    alert(`verificaremos a sua denuncia: "${report}"`) 
  }
  console.log(`Report: ${report}`)
}

botao.addEventListener("click", logar); 
botaoReport.addEventListener("click", Reportar); 