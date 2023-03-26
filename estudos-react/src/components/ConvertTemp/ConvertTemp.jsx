// 20/03/23
// Efeitos = ações secundarias

import { useEffect, useState } from "react";
import "./ConvertTemp.css";

export function ConvertTemp() {
    const [tempC, SetTempC] = useState(0);
    const [tempF, setTempF] = useState(0);
    const [tempK, setTempK] = useState(0);
    
    // sintaxe do useEffect
    // nesse exemplo, qd a tempC for alterada essa funcao/efeito será executada automaticamente. 
    useEffect(() => {
        const resultConversaoF = tempC * 1.8 + 32;
        const resultConversaoK = Number(tempC) + 273; //coloco number pois o input no form é retornado como string.
        setTempF(resultConversaoF);
        setTempK(resultConversaoK);
    }, [tempC]); // apos a virgula, coloco a variavel que eu quero surtir efeito

    // a conversao para kelvin, poderia ser feito em outro useEffect.

    return(
        <div>
            <input type="number" placeholder="Temperatura em °C"  onChange={(evento) => SetTempC(evento.target.value)}/>
        <p>Valor digitado: {tempC}°C</p>
        <p>Temperatura em Fahrenheit: {tempF}°F</p>
        <p>Temperatura em Kelvin: {tempK}K</p>
        </div>
    )
};