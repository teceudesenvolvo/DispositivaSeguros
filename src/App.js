import './App.css'; 

import { Switch, Route } from 'react-router-dom'


//Screen Navigate
import homeDashboard from '../src/screens/homeDashboard';

  // Páginas Principais
import Home from '../src/screens/home';
import QuemSomos from './screens/client/quemSomos';

  // Páginas Secundárias
import SeguroVeiculos from './screens/client/seguroVeiculos';
import seguroViagem from './screens/client/seguroViagem';
import seguroVida from './screens/client/seguroVida';
import seguroResidencial from './screens/client/seguroResidencial';
import Perfil from './screens/client/Perfil';

// Formulários
import ContactPage from './screens/contact'

// SingIn / SignUp
import register from './screens/client/register';
import login from './screens/client/login';


// Navigate Components
import TopBar from '../src/componets/topBarSearch'
// import Menu from './componets/menu';
// import MenuDesktop from './componets/menuDesktop';



function App() {
  return (
    <div className="App">
      
      <TopBar />
      <Switch>
        {/* Página Principal */}
        <Route exact path="/" component={homeDashboard} />
        <Route path="/quem-somos" component={QuemSomos} />
        <Route path="/seguro-veiculos" component={SeguroVeiculos} />
        <Route path="/seguro-viagem" component={seguroViagem} />
        <Route path="/seguro-vida" component={seguroVida} />
        <Route path="/seguro-residencial" component={seguroResidencial} />
        
        {/* Perfis de Acesso */}
        <Route path="/login" component={login} />
        <Route path="/register" component={register} />
        <Route path="/perfil" component={Perfil} />
        
        {/* Páginas de Formulários */}
        <Route path="/protocolar-materia" component={ContactPage} />
        
        <Route path="/novidades" component={Home} />


      </Switch>
      {/* <Menu /> */}
      {/* <MenuDesktop /> */}
      <footer className='footer'>
        <p> Todos os direitos reservados &copy; 2024 - Dispositiva Seguros</p>
      </footer>


    </div>
  );
}

export default App;
