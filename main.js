const form = document.getElementById('form-contato');
const nome = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault(); //retira reload

   adicionarLinha();
   atualizarTabela();
  



});

function adicionarLinha() {

    const inputNomeEscolhido = document.getElementById('nome-escolhido');
    const inputTelefoneEscolhido = document.getElementById('telefone-escolhido');



    if(nome.includes(inputNomeEscolhido.value)) {
        alert(`O nome: ${inputNomeEscolhido.value} já foi inserido`);

    } else {

        nome.push(inputNomeEscolhido.value);
        telefone.push(parseFloat(inputTelefoneEscolhido.value));
   

    let linha = '<tr>';
    linha += `<td>${inputNomeEscolhido.value}</td>`;
    linha += `<td>${inputTelefoneEscolhido.value}</td>`;
    //linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;

    linhas += linha;

    }
  
    inputNomeEscolhido.value = '';
    inputTelefoneEscolhido.value = '';


}

function atualizarTabela() {
    const corpoTabela =  document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}





