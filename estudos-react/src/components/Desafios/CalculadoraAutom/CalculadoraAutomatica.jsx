// 20/03/23
// 2) Crie uma calculadora de porcentagem com dois campos (valor e percentual), mostrar o resultado sem a necessidade de um botão de Calcular. [valor, percentual]


import { useEffect, useState } from "react";

export function Calculadora() {
    const[valor, setValor] = useState("");
    const [percentual, setPercentual] = useState("");
    const [resultado, setResultado] = useState("");

    useEffect(() => {
        const calculo = valor * (percentual / 100);
        setResultado(calculo);
    }, [valor, percentual]);

    return(
        <div>
            <input type="number" placeholder="Valor" onChange={(evento) => setValor(evento.target.value)}/> <br/>
            <input type="number" placeholder="Percentual %" onChange={(evento) => setPercentual(evento.target.value)}/> <br/>
            
            <h4>{percentual}% de {valor} é {resultado}</h4>
        </div>
    );
}