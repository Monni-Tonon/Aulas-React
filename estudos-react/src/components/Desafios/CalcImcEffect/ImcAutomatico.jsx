// 20/03/23
// 1) Aplicar efeitos no Desafio I para recalcular o IMC sem a necessidade de apertar em Calcular. [peso, altura]

import { useEffect, useState } from "react";

export function CalculaImc() {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [imc, setImc] = useState(-1);

useEffect(() => {
    const calcImc = Number(peso / altura ** 2);
    setImc(calcImc);
},[peso, altura])

function limpar() {
    setPeso();
    setAltura();
    setImc("");
}

return (
    <div>
        <input type="number" placeholder="digite seu peso" onChange={(evento) => setPeso(evento.target.value)} value={peso}/>
        <input type="number" placeholder="digite sua altura" onChange={(evento) => setAltura(evento.target.value)} value={altura}/>
    <hr/>
    {/* {(imc !== Infinity && !isNaN(imc)) && <p>O seu IMC é: {imc.toFixed(2)}</p>} */}
    <p>seu IMC é: {imc.toFixed(2)}</p>
    <button onClick={limpar}>Limpar </button>
    </div>
)
}