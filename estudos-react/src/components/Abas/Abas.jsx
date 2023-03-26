import { useState } from "react";
import "./Abas.css";

export function Abas() {

    const [aba, setAba] = useState("home");

    // -----inicio funçoes criadas para ativar a mudança de estado (o botao qd clicar neles) e jogar o onclick em cada um:
    // function irParaHome() {
    //     setAba("home");
    // }

    function irParaPerfil() {
        setAba("perfil");
    }

    function irParaAjuda() {
        setAba("ajuda");
    }
    // ----- fim das funçoes para ativar o botao e alterar pagina

    // ---- inicio do cod que altera a parte do conteudo qd clicar no botao
    let conteudoAba; // contem o layout da aba selecionada

        if(aba === "home") {
            conteudoAba = <div>HOME</div>;
        } else if (aba === "perfil") {
            conteudoAba = <div>PERFIL</div>;
        } else if (aba === "ajuda") {
            conteudoAba = <div>AJUDA</div>;
        }
    // ---- fim do cod que altera a parte do conteudo qd clicar no botao

        return (
            <div>
                {/* usando arrow function para setar a aba home: */}
                <button onClick={() => setAba("home")}>Home</button>
                <button onClick={irParaPerfil}>Perfil</button>
                <button onClick={irParaAjuda}>Ajuda</button>
                <hr />
                <div>{conteudoAba}</div>
            </div>
        );
}



// OBS:
// para fazer o uso da arrow function no botao, nao é necessario criam a funcao "irPara..." fazendo da forma exemplificada no botao HOME onClick={() => setAba("home")} o novo estado ja está sendo setado dentro da arrow.






// a ideia do codigo é que a cada botao aparecesse o conteudo de cada um. essa forma longa é resumida acima, onde é verificado que apenas a div é q a muda
// if (aba === "home") {
//     return (
//       <div>
//         <button>Home</button>
//         <button>Perfil</button>
//         <button>Ajuda</button>
//         <hr />
//         <div>HOME</div>
//       </div>
//     );
//   } else if (aba === "perfil") {
//     return (
//       <div>
//         <button>Home</button>
//         <button>Perfil</button>
//         <button>Ajuda</button>
//         <hr />
//         <div>PERFIL</div>
//       </div>
//     );
//   } else if (aba === "ajuda") {
//     return (
//       <div>
//         <button>Home</button>
//         <button>Perfil</button>
//         <button>Ajuda</button>
//         <hr />
//         <div>AJUDA</div>
//       </div>
//     );
//   }