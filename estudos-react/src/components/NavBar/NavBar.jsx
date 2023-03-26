import "./NavBar.css";

// props = propriedades de um componente
// Renderização condicional = mudar o visual e estrutura do componente de acordo com algum valor

export function NavBar(props) {
    const logado = props.logado; // salvei o props em uma variavel para nao ficar repetindo. valor booleano
    const nomeUsuario = props.nomeUsuario; // valor string

        let mensagem;

        if(logado === true) {
            mensagem = <p>Bem vindo(a), <b>{nomeUsuario}</b></p>
        } else {
            mensagem = <p>Você está <b>offline</b>!</p>
        }
            // && = se o valor for verdadeiro, incorpora o elemento
            return (
                <div>
                    <hr />
                    {logado && <img width="25" src="https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1-1024x1024.png"/>}
                    {mensagem}
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">PRODUTOS</a></li>
                        <li><a href="#">AJUDA</a></li>
                        {logado && <li><a href="#">PERFIL</a></li>}
                        {!logado && <li><a href="#">CADASTRE-SE</a></li>}
                    </ul>
                </div>
            )


// com relacao a var mensagem, é interessante quando tem algo que se repete para acontecer repetidas coisas, como a navBar, q aparece com user logado ou nao, mas so a mensagem muda
// a img so deve aparecer se logado = true , logo, a condicional logado e imagem apareceram se for true. isso foi feito de forma dentro dos {}







/* MÉTODO LONGO: repetindo toda a estrutura, só por causa da mensagem que é diferente */
    // if(logado === true) {
    //     return (
    //     <div>
    //         <hr />
    //         <p>Bem vindo(a), <b>{nomeUsuario}</b>!</p>
    //             <ul>
    //                 <li><a href="#">HOME</a></li>
    //                 <li><a href="#">PRODUTOS</a></li>
    //                 <li><a href="#">AJUDA</a></li>
    //             </ul>
    //     </div>
    //     );
    // }
    // else {
    //     return (
    //         <div>
    //             <hr />
    //             <p>Você está offline!</p>
    //                 <ul>
    //                     <li><a href="#">HOME</a></li>
    //                     <li><a href="#">PRODUTOS</a></li>
    //                     <li><a href="#">AJUDA</a></li>
    //                 </ul>
    //         </div>
    //         );
    // }
}