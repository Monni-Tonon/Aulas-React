// A inclusao da imagem qd a imagem está local, precisa ser importada e atribuida em forma de {}
// O react nao retorna mais de um elemento, logo tem de colocar os varios elementos dentro de uma grande <div>
// foi alterada a grande <div> por <></> : chama-se "fragment"

import { Music } from "../Music/Music"
import ImgMusic1 from "../../assets/images/1.png";
import ImgMusic2 from "../../assets/images/2.png";
import ImgMusic3 from "../../assets/images/3.png";
import './ListMusic.css';

export function ListMusic() {
    return (
        <>
        <Music image={ImgMusic1} title="5GB" author="Node & Modules"></Music>
        <Music image={ImgMusic2} title="Oi React" author="Mc Node"></Music>
        <Music image={ImgMusic3} title="LetiCSSia" author="CSS e seus teclados"></Music>
    
    </>
    );
}












// Ese foi o primeiro codigo de forma longa. refeita de forma reduzida no arquivo Music.jsx
// export function ListMusic() {
//     return (
//         <>
//             <div  className="music">
//                 <img src={ImgMusic1} />
//                 <h3>5GB</h3>
//                 <span>Node & Modules</span>
//             </div>
//             <div  className="music">
//                 <img src={ImgMusic2} />
//                 <h3>Oi React</h3>
//                 <span>Mc Node</span>
//             </div>
//             <div  className="music">
//                 <img src={ImgMusic3} />
//                 <h3>LetiCSSia</h3>
//                 <span>CSS e seus teclados</span>
//             </div>
//         </>
//     );
//}
