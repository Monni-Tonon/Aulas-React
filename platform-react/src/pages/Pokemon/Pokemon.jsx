import { useForm } from "react-hook-form"
import "./Pokemon.css";
//handlesubmit = é responsavel por intermediar a captura dos dados do formulário e agrupar-las em um objeto "data" e passar para a função de tratamento (o submeter). funcao q retorna funcao. propriedade do react-hook-form
// register = cria o estado pro campo e cria os eventos para o campo e retorna o objeto com esses eventos
// usa o spread (...) para ele soltar cada propriedade que ele está retornando do objeto como propriedade e valor lá pro formulário utilizar
// o register pode receber tambem objs de validaçãp
// formState: eu nao quero todas as ferramentas do fdormState, so o errors, entrao crio o obj dentro do obj
// o obj errors é um estado!

export function Pokemon() {

    const {register, handleSubmit, formState: { errors }} = useForm();
    const patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    function submeter(data) {
        //será submetido todos os dados do objeto assim q o handlersbmit for acionado, chamando essa funcao submeter
        console.log(data);
    }

    return (
        <div className="pokemon">
            <h1>Cadastro de Pokemon</h1>
            <form onSubmit={handleSubmit(submeter)}>

                <label htmlFor="nome">Nome</label><br />
                <input type="text" id="nome" {...register("nome", {required: true, maxLength: 255})}/><br />
                {/* coloco {} pq coloco condicao: se existir erro, apresenta a mensagem */}
                {errors.nome && <span className="invalid-message">Digite um nome válido!</span>}<br />
                
                <label htmlFor="tipo">Tipo</label><br />
                <input type="text" id="tipo" {...register("tipo", {required: true, maxLength: 255})}/><br />
                {errors.tipo && <span className="invalid-message">Digite um tipo válido!</span>}<br />
                
                <label htmlFor="altura">Altura</label><br />
                <input type="float" id="altura" {...register("altura", {required: true, min:0})}/><br />
                {errors.altura && <span className="invalid-message">Digite uma altura válido!</span>}<br />
                
                <label htmlFor="peso">Peso</label><br />
                <input type="float" id="peso" {...register("peso", {required: true, min:0})}/><br /><br />
                {errors.peso && <span className="invalid-message">Digite um peso válido!</span>}<br />

                <label htmlFor="email">Email</label><br />
                <input type="email" id="email" {...register("email", {required: true, pattern: patternEmail})}/><br /><br />
                {errors.email && <span className="invalid-message">Digite um email válido!</span>}<br />
                
                <button type="submit">Cadastrar</button>

                </form>
        </div>
    )
}