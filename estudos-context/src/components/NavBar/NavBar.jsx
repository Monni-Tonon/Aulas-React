import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";

export function NavBar() {

  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;
  const alternar = resultado.alternar;

  let iconeBtn = "https://cdn-icons-png.flaticon.com/512/3073/3073665.png";
  if(temaEscuro) {
    iconeBtn = "https://cdn-icons-png.flaticon.com/512/581/581601.png";
  }
  return (
    //ternario. como se le: o tema esta dark? se sim, usa o tema success
    <Navbar
      bg={temaEscuro ? "dark" : "success"}
      variant={temaEscuro ? "dark" : "light"}
      expand="sm"
    > 
      <Container fluid>
        <Navbar.Brand>App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/perfil">Perfil</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Button variant="outline-light" onClick={alternar}>Tema
            <img src={iconeBtn} width="16" />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
