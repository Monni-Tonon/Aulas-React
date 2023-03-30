import { useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { getLivro, updateLivro } from "../../firebase/livros";

export function EditLivro(){

    // useParams = captura o id do livro. declarado com desustrutracao
    const {id} = useParams();

    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const navigate = useNavigate();

    // salvar no banco de dados os dados atualizados
    function onSubmit(dadoAtualizado) {
        updateLivro(id, dadoAtualizado).then(() => {
            toast.success("Livro editado com sucesso!", {duration: 3000, postition: "top-center"})
            navigate("/livros");
        })
    }

    useEffect(() => {
        getLivro(id).then(livro => {
            //o reset ira retornar os dados do livro no campo para edicao.
            reset(livro);
        })
    }, [id, reset]);

    return (
        <div className="editar-livro">
        <Container>
            <h1>Editar livro</h1>
            <hr />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" className={errors.titulo ? "is-invalid" : ""} {...register("titulo", {required: "O título deve ser obrigatório.", maxLength: {value: 255, message: "Limite de 255 caracteres"}})} />
                    <Form.Text className="text-danger">
                        {errors.titulo?.message} 
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Autor</Form.Label>
                    <Form.Control type="text" className={errors.autor ? "is-invalid" : ""} {...register("autor", {required: "O autor deve ser obrigatório.", maxLength: {value: 255, message: "Limite de 255 caracteres"}})} />
                    <Form.Text className="text-danger">
                        {errors.autor?.message}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control type="text" className={errors.categoria ? "is-invalid" : ""} {...register("categoria", {required:"Categoria deve ser obrigatória.", maxLength: {value: 255, message: "Limite de 255 caracteres"}})} />
                    <Form.Text className="text-danger">
                        {errors.categoria?.message}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ISBN</Form.Label>
                    <Form.Control type="text" className={errors.isbn ? "is-invalid" : ""} {...register("isbn", {required:"ISBN deve ser obrigatório.", minLength: {value: 14, message: "O mínimo é 14 caracteres"}})} />
                    <Form.Text className="text-danger">
                        {errors.isbn?.message}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Imagem da capa</Form.Label>
                    <Form.Control type="url" className={errors.urlcapa ? "is-invalid" : ""} {...register("urlcapa", {required:"O endereço da capa é obrigatória"})} />
                    <Form.Text className="text-danger">
                        {errors.urlcapa?.message}
                    </Form.Text>
                </Form.Group>

                <Button type="submit" variant="success">Concluído</Button>
            </Form>
        </Container>
    </div>
    )
}