// ROTAS ANINHADAS (ROOT) - 22/03/23
// Uso do Outlet = é o cara que vai redirecionar para a pag dentro de Root, la no APP que esta sendo chamada no site
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Menu } from "../../components/Menu/Menu";

//esse componente Root vai ser a estrutura da pag
export function Root() {
    return (
        <div className="root">
            <Menu />
            <Container>
                <Outlet />
            </Container>
        </div>
    )
}