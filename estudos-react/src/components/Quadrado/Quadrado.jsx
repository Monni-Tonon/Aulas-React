import "./Quadrado.css";

//Essas duas funções tambem poderiam ser escreitas dentro da function Quadrado, mas coloquei fora para melhor visualização
// function quandoClick() {
//     alert ("Clicouu!")
// }

function quandoMouseEntrar(evento) {
    const elementoAtivo = evento.target; /* target = o proprio quadrado(elemento) esta chamadno o evento */
    
    elementoAtivo.style.backgroundColor = "red"; //chamar a div quadrado, atributo style

}

function quandoMouseSair(evento) {
    const elementoAtivo = evento.target; 
    
    elementoAtivo.style.backgroundColor = "blue"; 
}

function quandoMouseDuploclick(evento) {
    const elementoAtivo = evento.target; 
    
    elementoAtivo.style.backgroundColor = "orange"; 
}

export function Quadrado() {
    
    return (
        <div 
            className="quadrado"
            // onClick={quandoClick}
            onMouseEnter={quandoMouseEntrar}
            onMouseLeave={quandoMouseSair}
            onDoubleClick={quandoMouseDuploclick}
        >
        </div>
    )
}