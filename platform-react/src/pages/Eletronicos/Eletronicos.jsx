import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Eletronicos.css";


export function Eletronicos() {

    const {register, handleSubmit, formState: { errors }} = useForm();

    function submeterPeca(eletronico) {
        //será submetido todos os dados do objeto assim q o handlerSubmit for acionado, chamando essa funcao submeter
        // console.log(heroi);
        
        
        let mensagem = `Peça cadastrada com sucesso!
                        NOME: ${eletronico.marca}.`
                        

        return alert(mensagem);

    }

    return (
        <div className="eletronicos">
            <h1>Cadastro de Equipamentos eletrônicos</h1>
            <form onSubmit={handleSubmit(submeterPeca)}>

                <label htmlFor="marca">Marca/modelo do equipamento</label><br />
                <input type="text" id="marca" {...register("marca", {required: true, maxLength: 255})}/><br />
                {/* coloco {} pq coloco condicao: se existir erro, apresenta a mensagem */}
                {errors.marca && <span className="invalid-message">Digite uma marca/modelo válido!</span>}<br />
                
                <label htmlFor="serie">Numero de serie</label><br />
                <input type="text" id="serie" {...register("serie", {required: true, maxLength: 50})}/><br />
                {errors.serie && <span className="invalid-message">Digite uma serie válida!</span>}<br />
                
                <label htmlFor="problema">Relato do problema</label><br />
                <textarea type="text" id="problema" {...register("problema", {required: true, maxLength: 7000})}/><br />
                {errors.problema && <span className="invalid-message">Max 7000 caracteres</span>}<br />
                
                <label htmlFor="dtentrada">Data de entrada</label><br />
                <input type="date" id="dtentrada" {...register("dtentrada", {required: true})}/><br /><br />
                {errors.dtentrada && <span className="invalid-message">Digite uma data de entrada válida!</span>}<br />

                <label htmlFor="dtentrega">Data de entrega</label><br />
                <input type="date" id="dtentrega" {...register("dtentrega", {required: true, min:(Date.now())})}/><br /><br />
                {errors.dtentrega && <span className="invalid-message">Digite uma data de entrega válida!</span>}<br />

                <label htmlFor="status">Status</label><br />
                    <select id="status" {...register("status", { required: true })}>
                        <option value="selecione" disabled>Status</option>
                        <option value="Pendente">Pendente</option>
                        <option value="Concluído">Concluído</option>
                        <option value="Entregue">Entregue</option>
                    </select>

                <button type="submit">Cadastrar</button>

                </form>
        </div>
    )
}