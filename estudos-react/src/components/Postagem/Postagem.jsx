// Crie um componente Postagem que possui:
// 	- Uma imagem como demonstração da postagem;
// 	- Um corpo de seção com <Titulo>;
// 	- Aplique estilizações nos elementos desse componente;

// - Crie um componente <Blog> que possui:
// 	- Vários componente <Postagem>.

// - Crie um componente <Footer>.

import { Titulo } from "../Titulo/Titulo";
export function Postagem() {
    return (
        <section>
            <Titulo></Titulo>
            <img src="https://picsum.photos/200" alt="imagem aleatoria" />
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quibusdam praesentium reprehenderit reiciendis. Placeat illum inventore harum distinctio veritatis nostrum eligendi quaerat sequi deleniti natus, molestias expedita esse iusto officia?
            </p>

        </section>
    );
}