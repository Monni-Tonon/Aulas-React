import "./Titulo.css";
// Titulo é o nome do componente
// Componente de função
export function Titulo(props) {
  //children => propriedade padrao do props. Representa o texto dentro da tag
  const textoTitulo = props.children;
  // Obj de estilo CSS (as propriedades CSS é em Camel case)
  let objetStyle = {
    barckgroundColor: props.borderColor, // border-left-color
    borderLeftColor: props.barckgroundColor,// background-color
  }

  // A parte "visual" do componente
  return (
  <h1 className="titulo" style={objetStyle}>
    {textoTitulo}
    </h1>
    );
}


// Forma simplificada:
// export function Titulo({borderLeftColor, backgroundColor, children}) {
//   return (
//     <h1 className="titulo" style={{borderLeftColor, backgroundColor}}>
//       {children}
//     </h1>
//   );
// }