import { useState } from "react";
import "./Quiz.css";

// transformei a pergunta em obj para ter enunciado e respostas
const pergunta = {
    enunciado: "Qual é a capital de Brunei?",
    alternativas: [
        "Fortaleza",
        "Bandar Seri Begawan",
        "Jakarta",
        "Kuala Lumpur"
    ],
    alternativaCorreta: "Bandar Seri Begawan"
}

let tentativas = 3; // variavel q recebe as minhas qtds de tentativas

export function Quiz() {
    //config o estado inicial do quiz:
    const [statusQuiz, setStatusQuiz] = useState("pendente");

    //funcao para checar se a alternativa clicada foi a correta:
    function checarResposta(altMarcada) {
        if(altMarcada === pergunta.alternativaCorreta) {
            setStatusQuiz("acertou");
        } else {
            setStatusQuiz("errou");
            //checar a qtd de tentativas até limite 3 qd erra
            tentativas = tentativas -1;
                if(tentativas === 0) {
                    setStatusQuiz("acabou");
                }
        }
    }

    // funcao para retornar as perguntas clicando no botao de "tentar novamente"
    function tentarNovamente() {
        setStatusQuiz("pendente");
    }

if(statusQuiz === "pendente"){
    return (
        <div>
            <h3>{pergunta.enunciado}</h3>
            <ol type="A"> {/* define o tipo de enumeracao das respostas*/}
                {pergunta.alternativas.map((alt) => 
                (<li className="alternativa" onClick={() => checarResposta(alt)}>{alt}</li>))}
                {/*alt=variavel q representa cada alternativa que o map vai mapear e retornar */}
            </ol>
        </div>
    );
} else if(statusQuiz === "acertou") {
    return (
        <div>
            <h3>Chutou certooo!</h3>
            </div>
    );
} else if(statusQuiz === "errou") {
    return (
        <div>
            <h3>Errou ruuuude!</h3>
            <button onClick={tentarNovamente}>Tente novamente!</button>
            </div>
    );
} else if(statusQuiz === "acabou") {
    return (
        <div>
            <h3>Voce não tem mais tentativas!</h3>
        </div>
    )
}
}