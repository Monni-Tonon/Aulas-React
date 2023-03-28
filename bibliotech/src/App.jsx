// Aula 27/03/23 - criar login comunicando com Google e usando firebase
// Aula 28/03/23 - criar logout
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Root } from "./pages/Root/Root";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { AuthContext } from "./components/contexts/AuthContext";
import { AddLivro } from "./pages/AddLivro/AddLivro";
import { Livros } from "./pages/Livros/Livros";

export function App() {

    const [usuarioLogado, setUsuarioLogado] = useState(null);
    useEffect(() => {
        // onStageChanged somente identifica/monitora o usuario conectado
        onAuthStateChanged(auth, (user) => {
            // user null = deslogado
            // user tem objeto = logado
            setUsuarioLogado(user);

        });

        //Quando nao tem estado no array, o efeito ira rodar apenas uma vez quando o App foi renderizado/inicializado
    },[]);



    return (
    <>
    {/* todas as rotas passarao pelo AuthContext pois as pags precisam saber se o user ta logado ou nao */}
        <AuthContext.Provider value={usuarioLogado}>
        <BrowserRouter>
            <Routes>
                {/* inico da rota segura */}
                <Route path="/" element={ <Root /> }>
                    <Route path="/" element={<Home />} />
                    <Route path="/livros" element={<Livros />} />
                    <Route path="/livros/adicionar" element={<AddLivro />} />
                </Route>
                {/* fim da rota segura */}
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
        </AuthContext.Provider>
        <Toaster />
    </>
    );
}