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
  function classificarSafra(ano) {
  if (ano >= 2020) {
    return "Vinho jovem";
  } else if (ano >= 2015) {
    return "Vinho amadurecido";
  } else {
    return "Vinho antigo";
  }
}
function exibirDados(nome, tipo, safra, estoque, classificacao) {
  alert("Veja os detalhes do vinho no console.");
  console.log("===============================");
  console.log("Nome do vinho: " + nome);
  console.log("Tipo: " + tipo);
  console.log("Safra: " + safra + " (" + classificacao + ")");
  console.log("Quantidade em estoque: " + estoque);
  console.log("===============================");
}
while (continuar === "sim") {
    totalCadastros++;

  var nomeAtual = validarEntrada("Digite o nome do vinho:");
  var tipoAtual = validarEntrada("Digite o tipo do vinho (Tinto, Branco, Rosé):");
  var safraAtual = parseInt(validarEntrada("Digite o ano da safra:"));
  var estoqueAtual = parseInt(validarEntrada("Digite a quantidade em estoque:"));
  var estoqueBaixo = verificarEstoqueBaixo(estoqueAtual);
  if (estoqueBaixo) {
    totalEstoqueBaixo++;
  }

  if (safraAtual < menorSafra) {
    menorSafra = safraAtual;
    vinhoMaisAntigo = nomeAtual;
  }
   var classificacao = classificarSafra(safraAtual);
  alert("Cadastro realizado com sucesso!");
  exibirDados(nomeAtual, tipoAtual, safraAtual, estoqueAtual, classificacao);

   continuar = prompt("Deseja cadastrar outro vinho? (sim / nao)").toLowerCase();
}
alert("Cadastro finalizado. Veja o resumo no console.");
console.log("===== RESUMO FINAL =====");
console.log("Total de vinhos cadastrados: " + totalCadastros);
console.log("Total com estoque baixo: " + totalEstoqueBaixo);
console.log("Vinho com safra mais antiga: " + vinhoMaisAntigo + " (" + menorSafra + ")");
console.log("=========================");