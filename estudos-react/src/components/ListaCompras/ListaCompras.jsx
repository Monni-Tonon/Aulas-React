import './ListaCompras.css';

// Criando um array
const compras = ["Batata palha", "Batata frita pronta", "Btata doce", "Batata chips"];

// ex gerar card de produtos, por um objeto (produtos)
const produtos = [
    { cod: 1, nome: 'Batata palha', quantidade: 5, precoUnitario: 5.5 },
    { cod: 2, nome: 'Batata frita pronta', quantidade: 3, precoUnitario: 10.5 },
    { cod: 3, nome: 'Batata doce', quantidade: 10, precoUnitario: 20 },
    { cod: 4, nome: 'Batata chips', quantidade: 5, precoUnitario: 15 },
  ];

// function sempre igual ao nome do arquivo que ele está
export function ListaCompras() {
    //nomeCompra é cada elemento da lista do array. entao o .map vai percorrer toda a lista e inserir(return) e vai jogar numa lista<li> de elementos <elementosCompras>
    const elementosCompras = compras.map((nomeCompra, index) => {
        // a key serve para controle interno do react para que ele veja q cada elemento está em uma posicao dentro da lista<li>
        return <li key={index}>{nomeCompra}</li>;
    });

        const elementosProdutos = produtos.map((produto) => {
            // o cod é colocado dentro da div, pois é a chave que nao se repetirá e será a identificação de cada produto
            return <div key={produto.cod} className='card-compra'>
                <h2>{produto.nome}</h2>
                <p>Quantidade: {produto.quantidade}</p>
                <p>Subtotal: {produto.quantidade * produto.precoUnitario}</p>
            </div>
        });
    
    return (
        <>
        <h2>Lista de compras</h2>
            <ul>{elementosCompras}</ul>
    <hr />
        <h2>Lista de produtos</h2>
            
        </>
    );
}