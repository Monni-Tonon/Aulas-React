import { useParams, Link } from "react-router-dom";
import { Usuario } from "../../pages/Usuario/Usuario";
import { usuarios } from "../../data/usuarios";


export function PerfilUser() {

    let params = useParams();
    let id = params.id;

    const user = usuarios.find(usuario => usuario.id === parseInt(id));

    return(
        <div className="perfil-usuario">
        <br />
        <hr/>    
        <br />
        <h3>{user.nome}</h3>
        <span>{user.email}</span>
        <br/>
        <span>{user.idade}</span>
        <br/>
        <span>{user.descricao}</span>
        <br/>
        <br/>
        <Link to="/usuario">Voltar</Link>
    </div>

    )
}