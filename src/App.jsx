
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Destino from './components/pages/Destino/Destino';
import NavigationBar from './components/NavigationBar';
import Contato from './components/pages/Contato';
import Promocoes from './components/pages/Promocoes';
import Footer from './components/Footer';




function App() {

  return (
    //Uso do Router
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/destino" element={<Destino />}/>
        <Route path="/promocoes" element={<Promocoes/>}/>
        <Route path="/contato" element={<Contato/>} />      
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}



export default App;
