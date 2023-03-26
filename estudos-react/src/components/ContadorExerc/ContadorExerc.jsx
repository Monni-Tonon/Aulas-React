// Atividade 1:Faça uma melhoria do contador desenvolvido em aula. 
//Crie novas opões de incrementação e decrementarão mudando o estado do contador. 
//Crie as seguintes opções: +10, +100, *3, /2, -50, -5. Para isso utilize botões para cada novo recurso.
//Para acionar as funções, utilize o evento onClick do React.
import { useState } from "react";
import "./ContadorExerc.css";

export function ContadorExerc() {
 let [numero, setNumero] = useState(0)
    // const array = useState(0); 
    // let numero = array[0]; 
    // let setNumero = array[1]; 

    // funcao para incrementar
    function increment() {
        setNumero(numero + 1);
    }

    // funcao para incrementar 10
    function increment10() {
        setNumero(numero + 10);
    }

    // funcao para incrementar 100
    function increment100() {
        setNumero(numero + 100);
    }

    // funcao para multiplicar 3
    function multiplic3() {
        setNumero(numero * 3);
    }

    // funcao para dividir por 2
    function divisao2() {
        setNumero(numero / 2);
    }
    // funcao para decrementar
    function decrement() {
        setNumero(numero - 1);
    }

    // funcao para decrementar 50
    function decrement50() {
        setNumero(numero - 50);
    }

    // funcao para decrementar 5
    function decrement5() {
        setNumero(numero - 5);
    }

    //função para zerar o contador
    function zerar() {
        setNumero(0);
    }
    return (
        <div>
            <h1>{numero}</h1>
            <button onClick={increment}>+1</button>
            <button onClick={increment10}>+10</button>
            <button onClick={increment100}>+100</button>
            <button onClick={multiplic3}>x3</button>
            <button onClick={divisao2}>/2</button>
            <button onClick={decrement}>-1</button>
            <button onClick={decrement50}>-50</button>
            <button onClick={decrement5}>-5</button>
            <button onClick={zerar}>Zerar</button>
        </div>
    );
}