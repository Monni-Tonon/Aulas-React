import { async } from "@firebase/util";
import { addDoc, getDocs } from "firebase/firestore";
import { livrosCollection } from "./collections";

export async function addLivros(livro) {
    await addDoc(livrosCollection, livro);
}

//funcao q busca todos os livros
export async function getLivros() {

    //snapshot é o nome ja nativo do firebase
    const snapshot = await getDocs(livrosCollection);
    
    let livros = [];
    //cada livro retornado nessa consulta retorna pro array livros
    snapshot.forEach(doc => {
        livros.push({...doc.data(), id: doc.id}); // doc.data converte o obj em livro
    })
    return livros;
}