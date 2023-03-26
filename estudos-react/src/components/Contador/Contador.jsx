// Estado = PODE ALTERAR (ex, um contador)
import { useState } from "react"; // useState -> uma função do React

export function Contador() {
    //useState é umja função que cria um estado. 
    // um estado é uma variavel especial que sincroniza as mudanças na pagina
    // indice 0 -> estado
    // indice 1 -> função que muda o estado
    const array = useState(0); // useState = Recebe um valor inicial e retorna um array (tem apenas 2 posições 0 e 1)

    let numero = array[0]; // --> estado
    let setNumero = array[1]; // --> altera estado

    // funcao para incrementar
    function increment() {
        setNumero(numero + 1);
    }
   
    // funcao para decrementar
    function decrement() {
        setNumero(numero - 1);
    }

    return (
        <div>
            <h1>{numero}</h1>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            {/* <button onClick={setNumero}>Atualizar</button> */}
        </div>
    );
}
// ===================================================================
// OBS: uma forma de desestruturação de declarar as variaveis(destruct)

// const array = useState(0); 

// let number = array[0]; 
// let setNumber = array[1]; 

//  // POSSO DECLARA RESSAS 3 LINHAS COMO:
// const [Number, setNumber] = useState(0)
// ===================================================================

// ===============================================================
// PRIMEIRO MODELO PARA ENTENDER OS ESTADOS
// export function Contador() {
//     let numero = 0;

//     // funcao para incrementar qd clicar no botao +1
//     function increment() {
//         numero = numero+1;
//         setNumero();
//     }
   
//     // funcao para decrementar qd clicar no botao -1
//     function decrement() {
//         numero = numero-1;
//         setNumero();
//     }

//     // funcao para atualizar o numero apresentado na tela apos clicar nos botoes
//     function setNumero() {
//         const displayNumero = document.getElementById("displayNumero");
//         displayNumero.innerHTML = numero;
//     }

//     return (
//         <div>
//             <h1 id="displayNumero">{numero}</h1>
//             <button onClick={increment}>+1</button>
//             <button onClick={decrement}>-1</button>
//             {/* <button onClick={setNumero}>Atualizar</button> */}
//         </div>
//     );
// }