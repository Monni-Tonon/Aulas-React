import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logoIcon from "../../assets/icons/livros.png";
import googleIcon from "../../assets/icons/google-white.svg";
import { useForm } from "react-hook-form";
import { cadastrarEmailSenha, loginGoogle } from "../../firebase/auth";
import { toast } from "react-hot-toast";
// tela sem a NavBar
export function Cadastro() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    // funcao para me direcioar para outra pag depoisd e logar e sair da pag de login
    const navigate = useNavigate();

    // funcao para logar usando email
    function onSubmit(data) {

        const { email, senha } = data;

        cadastrarEmailSenha(email, senha).then((user) => {
            toast.success(`Olá! Bem-vindo(a), ${user.displayName}`, {position:"top-center", duration:3000});
                navigate("/");
        }) 
            .catch((erro) => {
                toast.error(`Um erro aconteceu. Cód: ${erro.code}`, {position:"top-center", duration: 3000});
        });
    }
 
    // funcao para logar com o Google
    function onLoginGoogle() {
       //chamo a funcao que está dentro de auth.js
       // then = quando der certo o processo, entao....
        loginGoogle().then((user) => {
            toast.success(`Olá! Tudo bem, ${user.displayName}`, {position:"top-center", duration:3000}); // ou ${user.email} se quiser apresentar o email na mensagem
                navigate("/");
        }) 
            .catch((erro) => {
                toast.error(`Um erro aconteceu. Cód: ${erro.code}`, {position:"top-center", duration: 3000});
        });
    }


    return (<>
        <Container fruid className="my-5">
            <p className="text-center">
                <img src={logoIcon} width="256" alt="Logo do app"></img>
            </p>
            <h4> Faça parte da nossa plataforma!</h4>
            <br />

            <p className="text-muted">
                Já é cadastrado? <Link to="/login">Entrar</Link>
            </p>
            
            <Button className="mb-3" variant="primary" onClick={onLoginGoogle}>
                <img src={googleIcon} width= "32" alt="Logo do Google" />
                Entrar com o Google
            </Button>
            <hr />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" className={errors.email ? "is-invalid" : ""} placeholder="Seu email" {...register("email", { required: "E-mail obrigatório" })} />
                    <Form.Text className="invalid-feedback"/>
                    {errors.email?.message}
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" className={errors.senha ? "is-invalid" : ""} placeholder="Sua senha" {...register("senha", { required: "Senha obrigatória" })} />
                    <Form.Text className="invalid-feedback"/>
                    {errors.senha?.message}
                </Form.Group>

                <Button type="submit" variant="success">
                    Cadastrar
                </Button>
            </Form>
        </Container>
    </>);
}