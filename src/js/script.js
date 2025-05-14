var totalCadastros = 0;
var totalEstoqueBaixo = 0;
var menorSafra = 9999;
var vinhoMaisAntigo = "";
var continuar = "sim";
function validarEntrada(mensagem) {
    var entrada = prompt(mensagem);
    while (!entrada) {
      entrada = prompt("Campo obrigatório!\n" + mensagem);
    }
    return entrada;
  }
  function verificarEstoqueBaixo(quantidade) {
    if (quantidade < 5) {
      alert("Atenção: estoque baixo!");
      console.log("⚠️ ESTOQUE BAIXO");
      return true;
    }
    return false;
  }