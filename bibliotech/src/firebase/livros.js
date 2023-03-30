import { addDoc, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { livrosCollection } from "./collections";
import { storage } from "./config";

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

export async function uploadCapaLivro(imagem) {
    const fileName = imagem.name; // retorna o nome do arquino
    // ira guardar no storage o nome do arquivo (filName) dentro da pasta "livros", criada agora
    const imageRef = ref(storage, `livros/${fileName}`); // ref() -> funcao do firebase firestorage

    const result = await uploadBytes(imageRef, imagem);  // processo de upload, pegando a ref de local de armazenamento e a imagem de upload

    await getDownloadURL(result.ref); // procura a img q foi feita upload e retorna a url da imagem pela referencia
}