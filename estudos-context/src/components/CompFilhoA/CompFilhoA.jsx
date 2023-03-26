import { CompFilhoC } from "../CompFilhoC/CompFilhoC";
import "./CompFilhoA.css";

// construindo com o props drilling
// export function CompFilhoA(props) {
//   return (
//   <div className="filho-a">
//     <h3>FILHO A(pai do c)</h3>
//     {/* para q o filho E pegue as propriedades de A,
//      preciso passar a msma props para o filho C que é onde p E está. */}
//     <CompFilhoC valor={props.valor} />
//   </div>
//   );
// }


// contruindo com o context
export function CompFilhoA() {
  return (
  <div className="filho-a">
    <h3>FILHO A(pai do c)</h3>
    <CompFilhoC />
  </div>
  );
}