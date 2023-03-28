// Aula 27/03/23 - criar login comunicando com Google e usando firebase
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Root } from "./pages/Root/Root";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { Toaster } from "react-hot-toast";

export function App() {
    return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Root /> }>
                <Route path="/" element={<Home />}></Route>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
    </BrowserRouter>
    <Toaster />
    </>
    );
}