// - Perfil: Adicionar um forms de dados cadastrais do usuário, e logo abaixo um botão que define o tema da aplicação.
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Perfil.css";

export function Perfil() {

  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;
  const alternar = resultado.alternar;

  let iconeBtn = "https://cdn-icons-png.flaticon.com/512/3073/3073665.png";
  if (temaEscuro) {
    iconeBtn = "https://cdn-icons-png.flaticon.com/512/581/581601.png";
  }


  return  (
    <div>
      <h3>Cadastre-se:</h3>
      <Form className='form'>
            <Form.Group className="mb-3" controlId="nome">
                <Form.Label>Nome completo:</Form.Label>
                <Form.Control type="text" placeholder="Digite seu nome completo aqui" />        
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="login@email.com" />        
            </Form.Group>

            <Form.Group className="mb-3" controlId="cpf">
                <Form.Label>CPF:</Form.Label>
                <Form.Control type="text" placeholder="Digite aqui o seu CPF" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="cep">
                <Form.Label>CEP:</Form.Label>
                <Form.Control type="text" placeholder="Digite aqui o seu CEP" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="repetirSenha">
                <Form.Label>Criar senha:</Form.Label>
                <Form.Control type="password" placeholder="Digite aqui a sua senha" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="botaoEntrar">
                <div className='d-flex justify-content-between'>
                    <div><input type="checkbox" name="remember" id="remember" /><label for="remember" class="text-muted">Lembrar-me</label> 
                    </div>
                    <Button variant="dark" onClick={alternar}>
                      <img src={iconeBtn} width="16" />
                      Alterar tema
                    </Button>
                    <Button className='entrar' variant="secondary" type="submit" >
                        Cadastrar
                    </Button>
                </div>      
            </Form.Group>
            
        </Form>
    </div>
    );
}
