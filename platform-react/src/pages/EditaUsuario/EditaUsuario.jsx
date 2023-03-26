import { Button } from "react-bootstrap";
import { usuarios } from "../../data/usuarios";
import { useNavigate, useParams } from "react-router-dom"; // os que comecam com "use" sao funcoes(hooks)

export function EditaUsuario() {

    //useParams é uma funcao que retorna um obj. esse obj contem os parametros passados pela rota
    let params = useParams();
    let id = params.id; // esse "id" é relacionado a palavra "id" que esta na rota do path (App) e NAO ao parametro id que ta no obj.
    
    const user = usuarios.find(usuario => {
        //retorna a condicao que satisfaz a minha busca (find)
        return usuario.id === parseInt(id); //retorna valor booleano q satisfaz a pesquisa
    }); // uso o parseInt pq o useParams retorna uma string e preciso comparar o id w é numero int
    
    // ================================================================
    // useNavigate = função que retorna função
    // a funcao de retorno(ex: navigate) tem capacidade de navegar entre as rotas da aplicacao
    // é nele q é desenvolvida a validacao e se for true ele retorna para o local designado, fazendo a "navegação" entre as paginas
    let navigate = useNavigate();

    function editar() {
        //capturar as informacoes do form
        //validar os dados de entrada
        //modificar as informacoes no banco de dados
        navigate("/usuario");
    }
// ====================================================================

    return (
        <div className="edita-usuario">
            <h2>{user.nome}</h2>
            <span>{user.email}</span>
            <br/>
            <span>{user.idade}</span>
            <br/>
            <Button onClick={editar} variant="dark">Editar</Button> {/* chamo a funcao no botao para redirecionar para a rota */}
        </div>
    )
}