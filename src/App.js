import Header from './components/Header';
import Main from './pages/Main';
import Footer from './components/Footer'
import Productspage from './pages/Productspage';
import { Routes,Route } from 'react-router-dom'
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage';
import Productpage from './pages/Productpage';


function App() {
  return (
    <>
     <Header />
     <Routes>
     <Route path='/' element={<Main/>} />
     <Route path='/products' element={<Productspage/>} />
     <Route path='/products/1' element={<Productpage/>} />
     <Route path='/login' element={<Loginpage/>} />
     <Route path='/signup' element={<Signuppage/>} />
     {/* <Productspage/> */}

     </Routes>
     <Footer />
    </>
  );
}

export default App;
