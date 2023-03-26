// ROTEAMENTO - 21/03/2023
// TUDO QUE VEM APOS A / DO ENDERECO PRINCIPAL
// FOI NECESSARIA A INSTALACAO DO REACT-ROUTER (npm install react-router-dom)
// DEPOIS INCLUSAO DO "BrowserRouter" > "Routes" > "Route" AQUI NO APP
// path="/" => a / é o limitador entre a pag principal e o prox componete/pag 
// element={} => dentro de {} o componente que eu quero renderizar sempre dentro de < />
// a "/" representa o dominio. "dominio/contatos" ; "dominio/login"; ...
import './App.css';
import { Menu } from './components/Menu/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Blog } from './pages/Blog/Blog';
import { Contato } from './pages/Contato/Contato';
import { Usuario } from './pages/Usuario/Usuario';
import { Login } from './pages/Login/Login';
import { NotFound } from './pages/NotFound/NotFound';
import * as React from "react-bootstrap"
import { Root } from './pages/Root/Root';
import { Section1 } from './components/Section/Section1';
import { Section2 } from './components/Section/Section2';
import { Section3 } from './components/Section/Section3';
import { EditaUsuario } from './pages/EditaUsuario/EditaUsuario';
import { PerfilUser } from './components/PerfilUser/PerfilUser';
import { Pokemon } from './pages/Pokemon/Pokemon';
import { Herois } from './pages/Herois/Herois';
import { Eletronicos } from './pages/Eletronicos/Eletronicos';
import { Programadores } from './pages/Programadores/Programadores';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            {/* aninhamento de rotas: varios Route dentro de um Route "root" (retirado o <Menu> daqui e colocado no <Root>*/}
            <Route path='/' element={<Root />}>
              {/* marcação das rotas que seguirá a navegação do site, nao esquecendo de importar as mesmas */}
              <Route path="/" element={<Home />}>
                <Route>
                  <Route path='Section1' element={<Section1 />} />
                  <Route path='Section2' element={<Section2 />} />
                  <Route path='Section3' element={<Section3 />} />
                </Route> 
              </Route>

              <Route path='/usuario' element={<Usuario />}>
                <Route path="/usuario/perfil/:id" element={<PerfilUser />} />
              </Route>
              
              <Route path="/usuario/edit/:id" element={<EditaUsuario />} /> {/* :id -> parametro de rota */}

              <Route path='/blog' element={<Blog />} />

              <Route path='/contato' element={<Contato />} />

              <Route path='/login' element={<Login/>} />

              <Route path="/pokemon" element={<Pokemon/>} />

              <Route path="/herois" element= {<Herois/>} />

              <Route path="/eletronicos" element= {<Eletronicos/>} />

              <Route path='/cadastroProgramadores' element= {<Programadores />} />

              <Route path="*" element={<NotFound/>} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
