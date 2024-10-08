let btn1 = document.querySelector("#clickbtn")
let clicks = document.querySelector("contador")
let contar = 0 


function printClick(){
    console.log("Clique qui");
    contar++;
    contador.innerHTML ="Números de cliks " + contar
}
btn1.addEventListener(`click`, printClick)

var al = document.getElementById("alerta")
al.onclick = function(){
    alert("Alerta de navegação ")
}




// Seleciona o campo de entrada e a div para as mensagens
const campo = document.getElementById('meuCampo')
const mensagemDiv = document.getElementById('mensagem')
const mensagemDiv1 = document.getElementById('mensagem1')

// Função para validar o campo
function validarCampo() {
    if (campo.value.trim() === '') {
        mensagemDiv.textContent = 'Por favor, preencha o campo.'
       
        mensagemDiv.style.color = "red"
        mensagemDiv.classList.add('Por favor, preencha o campo.');
        mensagemDiv.classList.remove('Campo preenchido corretamente!');
    } else {
        mensagemDiv.textContent = 'Campo preenchido corretamente!'
        mensagemDiv.style.color = "green"
        mensagemDiv.classList.remove('Por favor, preencha o campo' );
    mensagemDiv.classList.add('Campo preenchido corretamente!');
      
    }
   
}



// Adiciona o evento blur ao campo
campo.addEventListener('blur', validarCampo);





// Seleciona todos os elementos com a classe "produto"
const produtos = document.getElementsByClassName('produto');
const detalhesDiv = document.getElementById('detalhes');

// Função para mostrar os detalhes de um produto
function mostrarDetalhes(produto) {
    const nomeProduto = produto.textContent;

    // Substitua os dados abaixo pelos dados reais dos seus produtos
    const detalhes = {
        Chocolate: { descrição: "Uma deliciosa barra de chocolate", preço: "R$ 5,00" },
        Biscoito: { descrição: "Biscoito crocante e saboroso", preço: "R$ 3,00" },
        Suco: { descrição: "Suco natural e refrescante", preço: "R$ 4,00" }
    };

    const detalhesSelecionados = detalhes[nomeProduto];

    detalhesDiv.innerHTML = `
        <h2>${nomeProduto}</h2>
        <p>Descrição: ${detalhesSelecionados.descrição}</p>
        <p>Preço: ${detalhesSelecionados.preço}</p>
    `;
}

// Adiciona o evento de clique a cada produto
for (let i = 0; i < produtos.length; i++) {
    produtos[i].addEventListener('click', () => {
        mostrarDetalhes(produtos[i]);
    });
}