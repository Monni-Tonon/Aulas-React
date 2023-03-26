//Criar form de cadastro de programadores usando o forms doreact-bootstrap(exercicio 3 - 24/03/23)

import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Programadores.css";

export function Programadores() {
    
    const {register, handleSubmit, formState: {errors}} = useForm();

    function cadastrarProgramador(programador) {
        let mensagem = `Programador Cadastrado com Sucesso!
                        Nome: ${programador.nome}.`

        return alert(mensagem);

    }

    return (
        <div className="programadores">
            <h1> Cadsatro de programadores</h1>
            <Form onSubmit={handleSubmit(cadastrarProgramador)}>

                <Form.Group className="mb-3">
                <Form.Label>Nome completo:</Form.Label><br />
                <Form.Control type="text" {...register("nome", {required: true})}/>
                {errors.nome && <span className="invalid-message">Digite um nome!</span>}<br />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label> Insira um email:</Form.Label><br />
                <Form.Control type="email" {...register("email", {required: true})}/>
                {errors.email && <span className="invalid-message">Digite um email valido!</span>}<br />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label> Insira um telefone:</Form.Label><br />
                <Form.Control type="text" {...register("telefone")}/>
                {errors.telefone && <span className="invalid-message">Digite um telefone valido!</span>}<br />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label> Informe o Estado:</Form.Label><br />
                <Form.Control type="text" {...register("estado", {required: true, maxLength: 2})}/>
                {errors.estado && <span className="invalid-message">Digite um Estado valido!</span>}<br />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label> Informe a Cidade:</Form.Label><br />
                <Form.Control type="text" {...register("cidade", {required: true})}/>
                {errors.cidade && <span className="invalid-message">Digite um cidade valida!</span>}<br />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Marque as áreas de interesse:</Form.Label>
                    <Form.Check  type="checkbox" label={"Fullstack"}/>
                    <Form.Check  type="checkbox" label={"Engenharia Dados"}/>
                    <Form.Check  type="checkbox" label={"Ciencia Dados"}/>
                    <Form.Check  type="checkbox" label={"Q.A."}/>
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Marque seu nivel de senioridade</Form.Label>
                <Form.Select aria-label="Marque seu nivel de experiencia" >
                    <option id="disabledSelect">Escolha o nivel</option>
                    <option value="junior">Júnior</option>
                    <option value="pleno">Pleno</option>
                    <option value="senior">Senior</option>
                </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Portifolio:</Form.Label><br />
                <Form.Control type="url" {...register("portifolio")}/>
                {errors.portifolio && <span className="invalid-message">Digite um portifolio valido!</span>}<br />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Habildades tecnicas</Form.Label>
                    <Form.Check  type="checkbox" label={"HTML"} {...register("HTML")}/>
                    <Form.Check  type="checkbox" label={"Java"} {...register("Java")}/>
                    <Form.Check  type="checkbox" label={"JavaScript"} {...register("JavaScript")}/>
                    <Form.Check  type="checkbox" label={"CSS"} {...register("CSS")}/>
                </Form.Group>

            <Button variant="dark" type="submit">Cadastrar</Button>
            </Form>
        </div>

    );

}