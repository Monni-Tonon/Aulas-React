import "./CompPai.css";
import { useState } from "react";
import { CompFilhoA } from "../CompFilhoA/CompFilhoA";
import { CompFilhoB } from "../CompFilhoB/CompFilhoB";
import { ExemploContext } from "../../contexts/ExemploContext";

// Props drilling = é o processo em um aplicativo React onde os props são passados de uma parte de uma árvore para outra, passando por outras partes que não precisam dos dados, mas apenas ajudam a passá-los pela árvore

// CONSTRINDO COM O PROPS DRILLING
// export function CompPai() {
  
//   const [estado, setEstado] = useState("estado");
  
//   function repetir() {
//     setEstado(estado + "oO");

//   // primeiro define uma informação q os componentes da hierarquia irao precisar. 
//   // ex: quero usar o estado pro filho A
// }
//   return (
//   <div className="pai">
//     <h3>PAI (do a e b)</h3>
//     <button className="btn btn-danger" onClick={repetir}>Repetir</button>
//     <p><b>Valor: {estado}</b></p>
//     <CompFilhoA valor={estado}/>
//     <CompFilhoB />
//   </div>
//   );
// }




// CONSTRUINDO COM O CONTEXT

export function CompPai() {
  
  const [estado, setEstado] = useState("estado");
  
  function repetir() {
    setEstado(estado + "oO");

  // primeiro define uma informação q os componentes da hierarquia irao precisar. 
  // ex: quero usar o estado pro filho A
}
  return (
  <div className="pai">
    <h3>PAI (do a e b)</h3>
    <button className="btn btn-danger" onClick={repetir}>Repetir</button>
    <p><b>Valor: {estado}</b></p>
    
    {/* inicio do uso do context. Fornece (provider) o "value" para a hierarquia q esta dentro dele.  */}
    <ExemploContext.Provider value={estado}>
      <CompFilhoA />
      <CompFilhoB />
    </ExemploContext.Provider>
    {/* fim do uso do context */}
  </div>
  );
}
