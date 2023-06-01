
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import Footer from './components/footer';
import Menu from './pages/menu';
import About from './pages/about';
import Conctact from './pages/conctact';
// reactdom'un yüklendikten sonra import edilmesi
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Router>

     <Navbar/>
     <Routes>
{/*yollar  */}
      <Route path='/' element={<Home/>} />
      <Route path='/menu' element={<Menu/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Conctact/>} />

      
     </Routes>
     <Footer/>
     </Router>
     
    </div>
  );
}

export default App;
