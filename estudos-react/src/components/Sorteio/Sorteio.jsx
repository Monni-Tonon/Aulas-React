/* Crie um componente de <Sorteio>, ao clicar no botão deve gerar um
número aleatório. Use o esquema Math.floor(Math.random() * 100). 
	- Caso o número gerado seja par, mostrar em verde.
	- Caso o número gerado seja ímpar, mostrar em vermelho. */

import { useState } from "react";
import "./Sorteio.css";

export function Sorteio() {
    const [numero, setNumero] = useState(0);

    //ESTILIZANDO AS CORES QD PAR OU IMPAR:
    let color = "black"; //objeto de estilo

    if(numero %2 === 0) {
        color = "green";
    } else {
        color = "red";
    }

    const objectStyle = { color };

    function gerarNumero() {
        let numeroSorteado = Math.floor(Math.random()*1000);
        setNumero(numeroSorteado); // chama um atualização do componente
    
    }

    // console.log("Componente reconstruiu " + new Date().toTimeString());

    return (
        <div>
            <h1 style={objectStyle}>{numero}</h1>
            <button onClick={gerarNumero}>Gerar numero</button>


        </div>
)
}

// ----------------------------------
// Resolução do professor para definir as cores de par ou impar dentro do CSS:
//  iniciar anter do return:
//  let h1Class;
//  if(numero % 2 === 0) {
//     h1Class = "par";
//  } else {
//     h1Class = "impar";
//  }

//  e lembrar de colocar | className={h3Class} | dentro da tag h1