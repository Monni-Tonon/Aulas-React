// Trazer de outro arquivo/biblioteca alguma função ou variável
// No index.js importa apenas o createRoot e o App. sem necessidade de importar todos os componentes aqui, e sim no App.jsx
import { createRoot } from "react-dom/client";
import { App } from "./App";

// Linka o arquivo css ao projeto React
import "./styles.css";

// Selecionando a div na página
const rootElement = document.getElementById("root");

// A div root será a base da aplicação
const root = createRoot(rootElement);

// Inserimos o conteúdo da página
root.render(<App />);









// JSX = Javascript Extension
// No fim o HTML é convertido para Javascript (por baixo dos panos)
// JSX = Açúcar Sintático

// Dentro das chaves podemos escrever expressões JS!
