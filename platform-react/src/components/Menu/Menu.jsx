import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

// o uso do <Link> continua navegando nas pags porem sem refresh na pag(sem a busca no servidor) ele é do router e substitui o <a href>
export function Menu() {
    return (
        <div className="menu">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Menu</Navbar.Brand>
                    <Nav className="me-auto">

                        <Button variant="link" />
                            <Link to="/">Home</Link>

                        <Button variant="link" />
                            <Link to="/usuario">Usuários</Link>

                        <Button variant="link" />
                            <Link to="/blog">Blog</Link>

                        <Button variant="link" />
                            <Link to="/contato">Contato</Link>

                        <Button variant="link" />
                            <Link to="/pokemon">Pokemon</Link> 

                        <Button variant="link" />
                        <Link to="/herois">Super-heróis</Link>

                        <Button variant="link" />
                        <Link to="/eletronicos">Eletrônicos</Link>

                        <Button variant="link" />
                        <Link to="/cadastroProgramadores">Programadores</Link>

                        <Button variant="link" />
                            <Link to="/login">Login</Link>    
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}