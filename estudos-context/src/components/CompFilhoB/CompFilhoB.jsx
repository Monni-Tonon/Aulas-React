import { useContext } from "react";
import { ExemploContext } from "../../contexts/ExemploContext";
import "./CompFilhoB.css";

// bloco formatado conjunto com o props drilling
// export function CompFilhoB() {

//   return <div className="filho-b">
//     <h3>FILHO B</h3>
//   </div>;
// }



// construindo com o context:
export function CompFilhoB() {
  
  const captura = useContext(ExemploContext);

  return <div className="filho-b">
    <h3>FILHO B</h3>
    <p className="tex-warning"><b>Valor: {captura}</b></p>
  </div>;
}