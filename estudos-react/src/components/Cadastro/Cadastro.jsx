import { useState } from "react";
import "./Cadastro.css";

export function Cadastro() {

    const [nome, setNome] = useState("");
    const [mail, setMail] = useState("");
    const [resumo, setResumo] = useState("");

    //funcao para receber nome e mail
    function obterNome(evento) {
        const input = evento.target; // o target é o campo.             |(entao primeiro pego o campo)
        const valor = input.value; // value é o valor digitado no campo |(e depois o valor digitado nele)
        setNome(valor); //Altera o valor do estado "nome"
    }

    function obterEmail(evento) {
        const input = evento.target;        //| ou substitituir essas 3 linhas por setMail (evento.target.value);
        const valor = input.value;          //|
        setMail(valor);                     //|
    } 

    function obterResumo(evento) {
        const textarea = evento.target; // o campo ativa o evento
        const valor = textarea.value; // valor recebe o conteudo digitado
        setResumo(valor); // seto o novo valor
    }

    return (
        <div>
            <strong>Formulário de Cadastro</strong>
                <br />
                <label>Nome</label><input type="text"  placeholder="Digite seu nome" onChange={obterNome}/>
                <br />
                <label>Email</label><input type="email" placeholder="Digite seu e-mail" onChange={obterEmail}/>
                <br />
                <label>Um Breve resumo</label><textarea id="resumo"  placeholder="Descreva sobre você" onChange={obterResumo}/>
                <br />
                <strong>{nome}</strong> {/*  só pra mostrar na tela qd digita no campo*/}
                <strong>{mail}</strong>
                <br />
                <strong>{resumo}</strong>
        </div>
    );
}