// referencia de exercicio: aula sovre incrementar e decrementar os valores dia 16/03 (Contador) e a aula de indexacao usando indexOf
import "./ListFruits.css";
import { frutas } from "../../Data/frutas"
import { useState } from "react";


export function ListFruits() {

   //variaveirs q irao mudar de estado, ou seja, as img q aparecem na tela
   const [resultado, setResultado] = useState([]); // inicialmente é um array vazio

   //funcao q ira filtrar no campo de buscas
   function filtrarFrutas(evento) {
      const input = evento.target.value;

      let busca = []; // vai conter todas as frutas q tiver na busca temporariamente

      for(let fruta of frutas) {
         //procura o indice da substring dentro do nome da fruta ( retorna -1 se nao existir pois os indices começam em 0)
         let indice = fruta.nome.toLowerCase().indexOf(input.toLowerCase()); // o valor q ta no indice de nome em fruta, tem esse valor?

         //verificar se a fruta faz parte da filtragem/do resultado
         if(indice != -1) {
            busca.push(fruta); // push insere um novo elemento
         }
      }
      setResultado(busca); // atualizo o array q antes era vazio. setResultado é o nomo estado do array
   }

   return (
      <div className="frutas">
         <input type="text" placeholder="Digite o nome de uma fruta..." onChange={filtrarFrutas} /> <br />

         <ul>
            {/* renderiza o array e retorna repetidamente.Resultado.map ira mapear cada fruta a ser retornada */}
               {resultado.map(fruta => (
                  <li>
                     <img src={fruta.imagem} />
                  </li>
               ))}
         </ul>
      </div>
   );
}