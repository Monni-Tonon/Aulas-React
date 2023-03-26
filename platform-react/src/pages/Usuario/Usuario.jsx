import {usuarios} from "../../data/usuarios";
import { Table } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

export function Usuario() {
    return (
        <div className="usuario">
            <h1>Usuários</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>E-mail</th>
                        <th>Editar</th>
                        <th>Perfil</th>
                    </tr>
                </thead>

                <tbody>
                    {usuarios.map(usuario => {
                        return (
                            <tr>
                                <td>{usuario.id}</td>
                                <td>{usuario.nome}</td>
                                <td>{usuario.idade}</td>
                                <td>{usuario.email}</td>
                                <td><Link to={`/usuario/edit/${usuario.id}`}>Editar</Link></td>
                                <td><Link to={`/usuario/perfil/${usuario.id}`}>Perfil</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <Outlet />
        </div>
    )
}