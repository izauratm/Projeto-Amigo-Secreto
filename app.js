//array para armazenamento dos nomes
let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    //validação para saber se está vazio ou não
    if (nome === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }

    //verificação de duplicidade
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    //adiciona nome ao array
    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    if (amigos.length === 0) {
        lista.innerHTML = "<li>Nenhum amigo adicionado.</li>";
        return;
    }

    amigos.forEach(amigo => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    if (amigos.length === 0) {
        alert("Adicione ao menos um nome antes de sortear!");
        return;
    }

    //sorteio do nome modo aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indiceSorteado];

    //remover nome do sorteado do array
    amigos.splice(indiceSorteado, 1);

    //atualiza a lista após remoção
    atualizarLista();

    //mostar nome do sorteado
    const itemResultado = document.createElement('li');
    itemResultado.textContent = `🎉 O amigo secreto é: ${nomeSorteado}`;
    resultado.appendChild(itemResultado);
}
