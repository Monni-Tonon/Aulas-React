import { useState } from "react";
import { Table } from "react-bootstrap";
import "./CadastroPessoas.css";



export function CadastroPessoas() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [salario, setSalario] = useState();
    const [listPessoas, setListPessoas] = useState([]); // o array de objs

    function obterNome(evento) {
        const input = evento.target;    
        const valor = input.value;  
        setNome(valor);     
    }

    function obterEmail(evento) {
        const input = evento.target;        
        const valor = input.value;          
        setEmail(valor);                     
    } 

    function obterCpf(evento) {
        const input = evento.target;    
        const valor = input.value;  
        setCpf(valor); 
    }

    // a funcao de obter salario coloquei como arrow function no botao para ter outro exemplo de como fazer
    // function obterSalario(evento) {
    //     const input = evento.target;    
    //     const valor = input.value;  
    //     setSalario(valor); 

    // }   

    function addPessoa() {
        //obj q representa uma pessoa:
        const novaPessoa = {
            nome: nome,
            email: email,
            cpf: cpf,
            salario: salario,
        };

        // gero um novo array, pego os elementos da lista e junto com a nova pessoa
        // os ... é o "spread"
        const novoArray = [...listPessoas, novaPessoa];
        setListPessoas(novoArray);
    }

    function editPessoa(objeto) {
        // estou filtrando do array o objto q nao é o que foi escolhido pra remover, e retorna um novo array com todos, menos aquele
        const novoArray = listPessoas.filter((elemento) => elemento !== objeto);
        setListPessoas(novoArray);
    }

    return(
        <>
        <div className="cadastro-pessoas">
            <h2>Cadastro de Pessoas</h2>
            <br />
            <label>Nome</label><input type="text"  placeholder="Digite seu nome" onChange={obterNome} value={nome}/>
            <br />
            <label>Email</label><input type="email" placeholder="Digite seu e-mail" onChange={obterEmail} value={email}/>
            <br />
            <label>CPF</label><input type="text" placeholder="Digite seu CPF" onChange={obterCpf} value={cpf}/>
            <br />
            <label>Salario</label><input type="number" placeholder="Digite o salário" onChange={(evento) => setSalario(evento.target.value)} value={salario}/>
            <br />
        </div>
        <button onClick={addPessoa}>Cadastrar</button>
        <div>
            <h3>Registros:</h3>
            <table className="tabela-pessoas">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>CPF</th>
                        <th>Salario</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {/* primeiro parametro (elemento) é o dados do obj inteiro, com as informacoes e o segundo parametro(index) sera a posicao numericao do obj */}
                    {listPessoas.map((elemento, index) => {
                        return (
                            // a key é usada pra diferenciar uma tr(linha) da outra, para add mais registros sem erro(pode ser um id se houver)
                            <tr key={index}>
                                <td>{elemento.nome}</td>
                                <td>{elemento.email}</td>
                                <td>{elemento.cpf}</td>
                                <td>{elemento.salario}</td>
                                <td><button onClick={() => editPessoa(elemento)}>Remover</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        </>
    );
}

