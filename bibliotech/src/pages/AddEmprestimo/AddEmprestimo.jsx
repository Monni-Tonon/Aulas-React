import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { addEmprestimo } from "../../firebase/emprestimos";
import { getLivro, getLivros } from "../../firebase/livros";

export function AddEmprestimo() {

    const [livros, setLivros] = useState([]);

    const {register, handleSubmit, formState: {errors}} = useForm();

    const navigate = useNavigate();

    //data possui: leitor, email, telefone, id livro
    function onSubmit(data) {
        //status do livro(pendente, disponivel, alugado)
        getLivro(data.idLivro).then(livro => {
            delete data.idLivro;
            let novoEmprestimo = {...data, status: "Pendente", livro, dtSaida: new Date()};
            addEmprestimo(novoEmprestimo).then(() => {
                toast.success("Empréstimo realizado!", {duration: 3000, position: "top-center"})
                navigate("/emprestimos");
            })
        })
    }

    // ao ser executado ele traz a lista de livros do BD para q um seja selecionado.
    useEffect(() => {
        getLivros().then(busca => {
            setLivros(busca);
        });
    }, []);


    return (
        <div className="adicionar-emprestimo">
            <Container>
            <h1>Adicionar empréstimo</h1>
            <hr />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Leitor</Form.Label>
                    <Form.Control type="text" className={errors.leitor && "is-invalid"}{...register("leitor", {required: "Nome obrigatório", maxLength: { value: 255, message: "Limite de 255 caracteres!" } })} />
                    <Form.Text className="invalid-feedback">
                        {errors.leitor?.message}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" className={errors.email && "is-invalid"} {...register("email", { required: "E-mail é obrigatório!", maxLength: { value: 255, message: "Limite de 255 caracteres!" } })} />
                    <Form.Text className="invalid-feedback">
                        {errors.email?.message}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Telefone</Form.Label>
                    <Form.Control type="tel" className={errors.telefone && "is-invalid"} {...register("telefone", { required: "Telefone é obrigatório!", maxLength: { value: 15, message: "Limite de 15 caracteres!" } })} />
                    <Form.Text className="invalid-feedback">
                        {errors.telefone?.message}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Livro</Form.Label>
                    <Form.Select className={errors.idLivro && "is-invalid"} {...register("idLivro", {required: "Livro obrigatório"})}>
                        {/* <option value="" disabled selected>Selecione um livro</option> */}
                        {livros.map(livro => <option key={livro.id} value={livro.id}>{livro.titulo}</option>)}
                    </Form.Select>
                    <Form.Text className="invalid-feedback">
                        {errors.idLivro?.message}
                    </Form.Text>
                </Form.Group>

                <Button type="submit" variant="success">Emprestar</Button>
            </Form>
            </Container>
        </div>
    )
}
