import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Home.css";

export function Home() {
  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;

  return (
    <div className={temaEscuro ? "bg-dark text-light" : "bg-light text-dark"}>
      <h1>CONTEUDO HOME</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facere explicabo, provident accusamus, vel alias saepe iusto sed aliquid quia blanditiis rerum totam dolor maxime ducimus fugiat quo voluptatem architecto.</p>
      <p>Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.Leite de capivaris, leite de mula manquis sem cabeça.Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.</p>
      <p>Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma pindureta.Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.In elementis mé pra quem é amistosis quis leo.Quem manda na minha terra sou euzis!</p>
    </div>
    );
}
