import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../components/contexts/AuthContext";
import { Menu } from "../../components/Menu/Menu";

// Montagem do layout principal do App com a NavBar fixa.
// Pags com NavBar fica: Home, Livros, Emprestimos, etc..
// Menu -> contendo a vacbar fixa;
// Outlet -> faz o roteamneto pras pags

export function Root() {
    //impedir que o user que nao esta logado entre na aplicação
    const usuarioLogado = useContext(AuthContext);
    // ou seja: se está deslogado(null), redireciona para pag de Login
    if(usuarioLogado === null) {
        return <Navigate to="/login" />
    }

    return (
        <>
        <header>
            <Menu />
            <main>
                <Outlet />
            </main>
        </header></>
    )
}