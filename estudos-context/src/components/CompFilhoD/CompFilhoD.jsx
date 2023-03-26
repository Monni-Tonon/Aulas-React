import { useContext } from "react";
import { ExemploContext } from "../../contexts/ExemploContext";
import Spinner from 'react-bootstrap/Spinner';
import "./CompFilhoD.css";
// construind com o props drilling
// export function CompFilhoD() {
//   return (
//   <div className="filho-d">
//     <h3>FILHO D</h3>
//   </div>
//   );
// }




// construind com o context

export function CompFilhoD() {

  const captura = useContext(ExemploContext);

  return (
    <div className="filho-d">
    <h3>FILHO D</h3>
    <Spinner animation="grow" />;
    <p>Valor: {captura}</p>
  </div>
  );
}

