// - Crie um array de alunos (nome, data de nascimento, nota, telefone);
// - Crie um componente que renderiza cada aluno em cards (ListaAlunos);
//    - Os alunos com média acima ou igual a 7 tem card com borda verde;
//    - Os alunos com média abaixo de 7 tem card com borda vermelha;
//    - Mostrar a média APENAS se o aluno tiver a nota maior ou igual a 7;
//    - Mostrar uma mensagem motivacional se o aluno tiver nota abaixo de 7;

// - Crie um componente que recebe uma prop numero, e mostra se é par ou ímpar;
import "./ListaAlunos.css";
const ListAlunos = [
    {
        nome: "Maria",
        dataNasc: "12/12/1999",
        telefone: "(33) 9998-8888",
        nota: 7.8,
    },
    {
        nome: "Pedro",
        dataNasc: "10/05/2001",
        telefone: "(23) 9998-7777",
        nota: 8,
    },
    {
        nome: "Joy",
        dataNasc: "12/02/1999",
        telefone: "(27) 9874-2525",
        nota: 2,
    },
    {
        nome: "Carlos",
        dataNasc: "02/08/1999",
        telefone: "(21) 3565-0000",
        nota: 5,
    },
];

export function ListaAlunos() {

    const grupoAlunos = ListAlunos.map((aluno, index) => {

        let media; //armazena nota ou mensagem
        let border = "1px solid black";
    
        if(aluno.nota >= 7){
            border = "2px solid green";
            media = <p> <b>Nota:</b> {aluno.nota}</p>
        }else {
            border = "2px solid red";
            media = <p><b>Estude mais!</b></p>
        }
    
        const objectStyle = { border };

        return (
        <div key={index} className='card-aluno' style={objectStyle}>
        <h2>Ficha do aluno(a)</h2>
        <p>Nome: {aluno.nome}</p>
        <p>Data nascimento: {aluno.dataNasc}</p>
        <p>Telefone: {aluno.telefone}</p>
        <p>Média final: {media}</p>
    </div>)
});
        return (
            <>
            <ul>{grupoAlunos}</ul>
            </>
);

}

// -------------- SOLUCAO DO PROFESSOR --------------

// export function ListaAlunos() {
//     const alunosCards = alunos.map((elemento) => {
//       // Operador ternário
//       let classCard =
//         elemento.media >= 7 ? "aluno-card aprovado" : "aluno-card reprovado";
  
//       return (
//         <div key={elemento.matricula} className={classCard}>
//           <small>Nº {elemento.matricula}</small>
//           <h3>{elemento.nome}</h3>
//           <p>{elemento.dataNascimento}</p>
//           <p>{elemento.telefone}</p>
//           {elemento.media >= 7 && <p>Média: {elemento.media}</p>}    | OU SUBRITITUIR ESSAS DUAS LINHAS PELA LINHA DE BAIXO
//           {elemento.media < 7 && <p>Continue se esforçando!</p>}     |   
//            {elemento.media >= 7 ? <p>Média: {elemento.media}</p> : <p>Continue se esforçando!</p>} 
//         </div>
//       );
//     });
  
//     return <div>{alunosCards}</div>;
//   }