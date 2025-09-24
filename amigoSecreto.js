let amigos = [];

function adicionar() {
  const input = document.getElementById("nomeAmigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Digite um nome!");
    return;
  }

  if (amigos.includes(nome)) {
    alert("Esse nome já foi adicionado!");
    return;
  }

  amigos.push(nome);
  atualizarLista();
  input.value = "";
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  amigos.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortear() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos um nome!");
    return;
  }

  const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
  document.getElementById("resultado").textContent = `🎉 O amigo secreto sorteado é: ${sorteado}`;
}