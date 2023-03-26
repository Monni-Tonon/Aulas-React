import { CompFilhoD } from "../CompFilhoD/CompFilhoD";
import { CompFilhoE } from "../CompFilhoE/CompFilhoE";
import "./CompFilhoC.css";

// // construcao do bloco com props drilling
// export function CompFilhoC(props) {
//   return ( 
//   <div className="filho-c">
//     <h3>FILHO C(pai de d e e)</h3>
//       <CompFilhoD />
//       <CompFilhoE valor={props.valor}/>
//     </div>
//     );
// }



// construcao do bloco com context

export function CompFilhoC() {
  return ( 
  <div className="filho-c">
    <h3>FILHO C(pai de d e e)</h3>
      <CompFilhoD />
      <CompFilhoE />
    </div>
    );
}
