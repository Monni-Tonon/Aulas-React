import { useState } from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form"

import "./Herois.css";
//handlesubmit = é responsavel por intermediar a captura dos dados do formulário e agrupar-las em um objeto "data" e passar para a função de tratamento (o submeter). funcao q retorna funcao. propriedade do react-hook-form
// register = cria o estado pro campo e cria os eventos para o campo e retorna o objeto com esses eventos
// usa o spread (...) para ele soltar cada propriedade que ele está retornando do objeto como propriedade e valor lá pro formulário utilizar

export function Herois() {

    const {register, handleSubmit} = useForm();

    function submeterHeroi(heroi) {
        //será submetido todos os dados do objeto assim q o handlerSubmit for acionado, chamando essa funcao submeter
        // console.log(heroi);
        let mensagem = `Heroi cadastrado!
                        NOME: ${heroi.nome}, 

                        PODER: ${heroi.poder}, 

                        FRAQUEZA: ${heroi.fraqueza}, 

                        HISTÓRIA: ${heroi.historia}`;

        return alert(mensagem);

    }

    return (
        <div className="herois">
            <h1>Cadastro de Herois</h1>
            <form onSubmit={handleSubmit(submeterHeroi)}>

                <label htmlFor="nome">Nome</label><br />
                <input type="text" id="nome" {...register("nome")}/><br />
                
                
                <label htmlFor="poder">Poder</label><br />
                <input type="text" id="poder" {...register("poder")}/><br />
                
                <label htmlFor="fraqueza">Fraqueza</label><br />
                <input type="text" id="fraqueza" {...register("fraqueza")}/><br />
                
                <label htmlFor="historia">Historia</label><br />
                <textarea type="text" id="historia" cols="23" {...register("historia")}/><br /><br />
                
                <button type="submit">Cadastrar</button>

                </form>
        </div>
    )
}


// --------------------------------------------------------------------
// ----- VERSAO DO PROF COM O ALERT DO BOOTSTRAP ----------------------
// -------------------------------------------------------------------

// export function Herois() {

//     const { register, handleSubmit } = useForm();
//     const [heroi, setHeroi] = useState();

//     function onSubmitHeroi(heroi) {
//         setHeroi(heroi)
//     }

//     return (
//         <div className="herois">
//             <h1>Cadastro de Super Heróis</h1>
//             <form onSubmit={handleSubmit(onSubmitHeroi)}>
//                 <label htmlFor="nome">Nome</label> <br />
//                 <input type="text" id="nome" {...register("nome")} /> <br />

//                 <label htmlFor="poder">Poder</label> <br />
//                 <input type="text" id="poder" {...register("poder")} /> <br />

//                 <label htmlFor="fraqueza">Fraqueza</label> <br />
//                 <input type="text" id="fraqueza" {...register("fraqueza")} /> <br />

//                 <label htmlFor="historia">História</label> <br />
//                 <textarea cols="23" id="historia" {...register("historia")}></textarea> <br />

//                 <button type="submit">Cadastrar Heroi</button>
//             </form>

//             <br />
                // Aqui faz validacao: se heroi existe, exibe alerta, se nao , nao exibe
//             {
//                 heroi &&
//                 <Alert variant="primary">
//                     Nome: {heroi.nome} <br />
//                     Poder: {heroi.poder} <br />
//                     Fraqueza: {heroi.fraqueza} <br />
//                     História: {heroi.historia} <br />
//                 </Alert>
//             }
//         </div>
//     );
// }