import "./Task.css";

//props = objeto que tem os valores que foram passados pra propriedade do componente
export function Task(props) {
    //propriedades do componente
    let title = props.title;
    let status = props.status;
    let deadline = props.deadline;
    
    let color = "blue";
    if(status === "Feito") {
        color = "darkgreen";
    }
    else if(status === "Atrasado") {
        color = "red";
    }
    else {
        color = "blue";
    }

    const objectStyle = { color };

    return (
        <div className="task">
            <strong>{title}</strong>
                <div className="details">
                    <span className="status" style={objectStyle}>{status}</span>
                    <span className="deadline">{deadline}</span>
                </div>
        </div>
    );
}



// Outra forma de declarar a propriedade: sem declarar as variaveis e chamano diretamente no return

// export function Task(props) {
//     return (
// <div className="task">
//             <strong>{props.title}</strong>
//             <div className="details">
//                 <span className="status">{props.status}</span>
//                 <span className="deadline">{props.deadline}</span>
//             </div>
//         </div>
//     );
// }



// Utilizando a desestruturação

// export function Task(props) {
//     let { title } = props; // let title = props.title;
//     let { status } = props;
//     let { deadline } = props;
//     return (
//         <div className="task">
//             <strong>{title}</strong>
//                 <div className="details">
//                     <span className="status">{status}</span>
//                     <span className="deadline">{deadline}</span>
//                 </div>
//         </div>
//     );
// }


// Outra forma da desestruturação, colocando todos em uma linha:

// export function Task(props) {
//     let { title, status, deadline } = props; 
//     return (
//         <div className="task">
//             <strong>{title}</strong>
//                 <div className="details">
//                     <span className="status">{status}</span>
//                     <span className="deadline">{deadline}</span>
//                 </div>
//         </div>
//     );
// }

// ou simplificando o codigo ainda mais, colocando as propriedades dento dos () da função:

// export function Task({ title, status, deadline }) {
//     return (
//         <div className="task">
//             <strong>{title}</strong>
//                 <div className="details">
//                     <span className="status">{status}</span>
//                     <span className="deadline">{deadline}</span>
//                 </div>
//         </div>
//     );
// }