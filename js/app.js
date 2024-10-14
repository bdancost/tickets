const estoque = {
  pista: 100,
  superior: 200,
  inferior: 400,
};

// Função principal de compra
function comprar() {
  let tipo = document.getElementById("tipo-ingresso").value;
  let qtd = parseInt(document.getElementById("qtd").value);

  if (isNaN(qtd) || qtd <= 0) {
    alert("Por favor, insira uma quantidade válida.");
    return;
  }

  // Verifica a disponibilidade e realiza a compra
  if (qtd > estoque[tipo]) {
    alert(`Quantidade indisponível para tipo ${tipo}`);
  } else {
    estoque[tipo] -= qtd;
    alert("Compra realizada com sucesso!");
    atualizarEstoque(tipo);
  }
}

// Função para atualizar o estoque na tela
function atualizarEstoque(tipo) {
  document.getElementById(`qtd-${tipo}`).textContent = estoque[tipo];
}
