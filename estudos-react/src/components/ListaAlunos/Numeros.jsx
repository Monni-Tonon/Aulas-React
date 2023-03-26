//- Crie um componente que recebe uma prop numero, e mostra se é par ou ímpar;

import "./Numeros.css";

export function Numeros({numero}){
    let mensagem;

    if(numero % 2 === 0){
        mensagem = "É par!"
        // console.log(mensagem);
    }else{
        mensagem = "É ímpar!"
        // console.log(mensagem);
    }

    return(
        <h1 className="resposta">O número {numero}: {mensagem}</h1>
    );
};