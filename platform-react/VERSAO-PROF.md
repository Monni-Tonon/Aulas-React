// VERSAO DA INCLUSAO DE SEÇÕES DO PROF - PAG APP.JSX
// CHAMANDO AS SEÇÕES APOS A CRIAÇÃO DE UM ARRAY DELAS, AS SEÇÕES SAO OBJETOS.

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';
import { Blog } from './pages/Blog/Blog';
import { Contato } from './pages/Contato/Contato';
import { Usuarios } from './pages/Usuarios/Usuarios';
import { Login } from './pages/Login/Login';
import { Section } from './components/Section/Section';
import { NotFound } from './pages/NotFound/NotFound';
import { Root } from './pages/Root/Root';

const Sections = [
  {
    title: 'Section 1',
    description: 'Lorem t amet consectetur, adipatur sed quas officia totam, aliquid perferendis. Quam iste tempora blanditiis placeat natus doloribus pariatur asperiores sit culpa earum? Sint, delectus accusantium.'
  },
  {
    title: 'Section 2',
    description: ' ipsut. Pariatur sed quas officia totam, aliquid perferendis. Quam iste landitiis placeat natus doloribus pariatur asperiores sit culpa earum? Sint, delectus accusantium.'
  },
  {
    title: 'Section 3',
    description: 'lor sit amet consectetur, adipisicing elit. Pariatur sed quas officia totam, aliquid perferendis. Quam iste tempora blanditiis placeat natus dores sit culpa earum? Sint, delectus accusantium.'
  }
]


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Root />}>
              <Route path='/' element={<Home />}>
                  <Route path="1" element={<Section title={Sections[0].title} description={Sections[0].description}/>}/>
                  <Route path="2" element={<Section title={Sections[1].title} description={Sections[1].description}/>}/>
                  <Route path="3" element={<Section title={Sections[2].title} description={Sections[2].description}/>}/>
              </Route>
              <Route path='/blog' element={<Blog />} />
              <Route path='/contato' element={<Contato />} />
              <Route path='/usuarios' element={<Usuarios />} />
              <Route path='/login' element={<Login />} />
              <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

              
          {/* ANINHAMENTOS DE ROTAS */}

          {/* ANINHAMENTO DE ROTAS são aplicações de roteamento em páginas web onde o conteúdo do componente é alterado em função da rota acessada na página.
            Exemplo: exemplo.com/usuarios/3245/perfil
            Area de "perfil" do usuário "3245" dentro da relação de "usuarios". */}