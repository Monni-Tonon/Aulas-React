import { addDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { emprestimosCollection } from "./collections";

export async function addEmprestimo(data) {
    await addDoc(emprestimosCollection, data);
}

export async function getEmprestimos() {
    const snapshot = await getDocs(emprestimosCollection);

    let emprestimos = [];
    snapshot.forEach(doc => {
        emprestimos.push({...doc.data(), id: doc.id})
    });
    return emprestimos;
}

export async function getEmprestimo(id) {
    const documento = await getDoc(doc(emprestimosCollection, id));
    return{...documento.data(), id: documento.id}
}

export async function updateEmprestimo(id, data) {
    await updateDoc(doc(emprestimosCollection, id), data);
}