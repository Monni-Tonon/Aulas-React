// - Login: Adicionar um forms de login, e a página deve refletir as mudanças
// de tema escuro/claro;
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css";

export function Login() {

  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;


  return  (
   
    <div className={temaEscuro ? "bg-dark text-light" : "bg-light text-dark"}>
      <h1>LOGIN</h1>
      <Form className='form'>
            <Form.Group className="mb-3" controlId="loginEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="login@email.com" />        
            </Form.Group>

            <Form.Group className="mb-3" controlId="loginSenha">
                <Form.Label>Senha:</Form.Label>
                <Form.Control type="password" placeholder="Digite aqui a sua senha" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="botaoEntrar">
                <div className='d-flex justify-content-between'>
                    <div><input type="checkbox" name="remember" id="remember" /><label for="remember" class="text-muted">Lembrar-me</label> 
                    </div>
                    <Button className='entrar' variant="secondary" type="submit" >
                        Entrar
                    </Button>
                </div>      
            </Form.Group>

            <Form.Group className="forgot" controlId="forgot">                 
                    <a href="#" id="forgot" class="font-weight-bold d-flex justify-content-end">Esqueceu sua senha?</a>                
            </Form.Group>

            <Form.Group className="text-center m-5" controlId="loginExterno">               
                    <p>Você também pode fazer login com:</p>
                        <a href="https://wwww.facebook.com" target="_blank" className="px-2">
                            <img src="https://www.freepnglogos.com/uploads/facebook-icons/facebook-icon-transparent-background-3.png"/> 
                        </a> 
                        <a href="https://www.google.com" target="_blank" className="px-2"> 
                            <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"/> 
                        </a>
                        <a href="https://www.github.com" target="_blank" className="px-2"> 
                            <img src="https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-github-icon-35.png"/> 
                        </a>                
                </Form.Group>

                <Form.Group className="mb-3" controlId="loginCadastrar">
                <div className='row d-flex justify-content-center'>
                    <p className="mb-0 text-center">Não possui conta?</p>
                    <p className="mb-0 text-center">
                        <a href="#" className="text-black-50 fw-bold">Clique aqui</a> e faça seu cadastro
                    </p>            
                </div>       
                </Form.Group>
        </Form>
    </div>
    );
}
