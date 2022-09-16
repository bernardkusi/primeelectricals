import Header from './components/Header';
import Main from './pages/Main';
import Footer from './components/Footer'
import Productspage from './pages/Productspage';
import { Routes,Route } from 'react-router-dom'
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage';
import Aboutpage from './pages/Aboutpage';
import Cartpage from './pages/Cartpage';
import Productpage from './pages/Productpage';
import ScrollToTop from './ScrollToTop';
import { useEffect, useState } from 'react';


function App() {
  const [cart,setcart]=useState([])
  const [count,setcount]=useState(0)
  useEffect(() => {
   setcount(cart.length)
  //  console.log(cart)
  }, [cart])
  const addtocart=(product)=>{
    
    let item=cart.find(item=>item===product)
    if(item){
      console.log("Product already in cart",item)
    }else{
      setcart([...cart,product])
    }

    // console.log(product)
  }

  const removefromcart=(product)=>{
    setcart(cart.filter(item=>item!==product))
    console.log(product)
  }
  return (
    <>
      <ScrollToTop/>
     <Header count={count}/>
     <Routes>
     <Route path='/' element={<Main  addtocart={addtocart}/>} />
     <Route path='/products/:id' element={<Productpage  addtocart={addtocart}/>} />
     <Route path='/products' element={<Productspage addtocart={addtocart}/>} />
     <Route path='/about' element={<Aboutpage/>} />
     <Route path='/cart' element={<Cartpage cart={cart} removefromcart={removefromcart}/>} />
     <Route path='/login' element={<Loginpage/>} />
     <Route path='/signup' element={<Signuppage/>} />
     {/* <Productspage/> */}

     </Routes>
     <Footer />
    </>
  );
}

export default App;
