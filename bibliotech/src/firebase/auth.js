import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./config";


// funcao assíncrona = que o resultado nao é obtido de imediato. 
// Haverá espera
export async function cadastrarEmailSenha(email, senha){
    // indicar para o firebase que queremos cadastrar um novo usuário utilizando email/senha

    // Aguardando o resultado do Firebase
    // esse auth é para identificar qual projeto no firebase sera utilizado pra autenticar. ele verifica com o ocd de config q esta no arquivo config.js
    const resultado = await createUserWithEmailAndPassword(auth, email, senha);

    return resultado.user;
}

export async function loginGoogle() {
    // Configurar como o login do google vai funcionar
    const provider = new GoogleAuthProvider();
    const resultado = await signInWithPopup(auth, provider);
    return resultado.user;
}

// função que realiza login com a conta de email que ja existe
export async function loginEmailSenha(email, senha) {

    const resultado = await signInWithEmailAndPassword(auth, email, senha);

        return resultado.user;
}

export async function logout() {
    // deslogar o usuario atual do firebase
    await signOut(auth);
}