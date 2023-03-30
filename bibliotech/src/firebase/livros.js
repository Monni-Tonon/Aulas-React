import { addDoc, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { livrosCollection } from "./collections";

export async function addLivros(livro) {
    await addDoc(livrosCollection, livro);
}

//funcao q busca TODOS os livros
export async function getLivros() {

    //snapshot é o nome ja nativo do firebase. getDocs() traz todos os livros
    const snapshot = await getDocs(livrosCollection);
    
    let livros = [];
    //cada livro retornado nessa consulta retorna pro array livros
    snapshot.forEach(doc => {
        livros.push({...doc.data(), id: doc.id}); // doc.data converte o obj em livro
    })
    return livros;
}

//funcao que busca o livro que será editado. o id dentro do parametro de getLivro pode ser qq nome
export async function getLivro(id) {
        //dentro da funcao doc() eu coloco o local q esta (a colecao) e o id do livro q sera editado
    const umLivro = await getDoc(doc(livrosCollection, id));
    return {...umLivro.data(), id: umLivro.id}
}

export async function updateLivro(id, dadoEditado) {
    await updateDoc(doc(livrosCollection, id), dadoEditado);
}

export async function deleteLivro(id) {
    await deleteDoc(doc(livrosCollection, id));
}