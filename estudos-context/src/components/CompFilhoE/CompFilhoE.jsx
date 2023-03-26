import { useContext } from "react";
import { ExemploContext } from "../../contexts/ExemploContext";
import "./CompFilhoE.css";

// construindo com o props drilling
// export function CompFilhoE(props) {
//   return (
//   <div className="filho-e">
//     <h3>FILHO E</h3>
//     <p><b> Valor: {props.valor}</b></p>
//   </div>
//   );
// }

// construindo com o context
export function CompFilhoE() {

  //capturando os dados do value do Provider:
  const captura = useContext(ExemploContext);


  return (
  <div className="filho-e">
    <h3>FILHO E</h3>
    <p><b> Valor: {captura}</b></p>
  </div>
  );
}

