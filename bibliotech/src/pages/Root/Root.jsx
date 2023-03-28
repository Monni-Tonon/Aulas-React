import { Outlet } from "react-router-dom";
import { Menu } from "../../components/Menu/Menu";

// Montagem do layout principal do App com a NavBar fixa.
// Pags com NavBar fica: Home, Livros, Emprestimos, etc..
// Menu -> contendo a vacbar fixa;
// Outlet -> faz o roteamneto pras pags
export function Root() {
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