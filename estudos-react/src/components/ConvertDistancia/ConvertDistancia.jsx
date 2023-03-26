import { useEffect, useState } from "react";

export function ConvertDistancia() {
    const [metro, setMetro] = useState(0);
    const [cm, setCm] = useState(0);
    const [mm, setMm] = useState(0);
    const [km, setKm] = useState(0);

    useEffect(() => {
        const valorMm = (Number(metro) * 1000);         //| ja colocando o number pra garantir q nao retorne como string 
        const valorCm = (Number(metro) * 100);
        const valorKm = (Number(metro) * 0.001);
        setMm(valorMm);
        setCm(valorCm);
        setKm(valorKm);
    },[metro]);
    
    return (
        <div>
            <input type="number" placeholder="Digite a qtd em metros" onChange={(evento) => setMetro(evento.target.value)} value= {metro}/>metros
            <p> Equivale a: {mm} mm</p>
            <p> Equivale a: {cm} cm</p>
            <p> Equivale a: {km} km</p>
            
        </div>
    );
}