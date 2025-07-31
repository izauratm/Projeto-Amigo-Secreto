//array para armazenamento dos nomes
let amigos = [];
// array auxiliar para controle de duplicidade em caixa baixa
let amigosSecreto = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nomeCorreto = input.value.trim();

    //validação para saber se está vazio ou não
    if (nomeCorreto === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }
    const nomeOriginal = nomeCorreto.toLowerCase();

    //verificação de duplicidade
    if (amigosSecreto.includes(nomeOriginal)) {
        alert("Este nome já foi adicionado!");
        input.value = ""; //limpa o campo
        return;
    }

    //adiciona nome ao array
    amigos.push(nomeCorreto);
    amigosSecreto.push(nomeOriginal)
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
    amigosSecreto.splice(indiceSorteado,1);

    //atualiza a lista após remoção
    atualizarLista();

    //mostar nome do sorteado
    const itemResultado = document.createElement('li');
    itemResultado.innerHTML = `
  <img src="assets/festa.gif" alt="Festa" style="width:32px; vertical-align:middle; margin-right:8px;">
  O amigo secreto é: ${nomeSorteado}
`;
    resultado.appendChild(itemResultado);
    
 confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
    });
}

