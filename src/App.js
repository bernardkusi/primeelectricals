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
import Servicepage from './pages/Servicepage';
import ScrollToTop from './ScrollToTop';
import { useEffect, useState } from 'react';
import Message from './components/Message';


function App() {
  const [cart,setcart]=useState([])
  const [count,setcount]=useState(0)
  const [open,setopen]=useState(false);
  const [message,setmessage]=useState(null)

const togglenav=()=>{
  setopen(!open)
}

const closenav=()=>{
  setopen(false)
}

const messageset=(message)=>{
  setmessage(message)
  setTimeout(() => {
    setmessage(null)
  }, 2500);
}

  useEffect(() => {
   setcount(cart.length)
  //  console.log(cart)
  }, [cart])
  const addtocart=(product)=>{
    
    let item=cart.find(item=>item===product)
    if(item){
      messageset(item.itemname+" already in cart")
    }else{
      setcart([...cart,product])
      messageset(product.itemname+" added to cart")
    }

    // console.log(product)
  }

  const removefromcart=(product)=>{
    setcart(cart.filter(item=>item!==product))
    messageset(product.itemname+" removed from cart")
  }
  return (
    <>
      <ScrollToTop/>
     <Header count={count} togglenav={togglenav} open={open}/>
     {message && <Message message={message}/>}
     <Routes>
     <Route path='/' element={<Main  addtocart={addtocart} closenav={closenav}/>} />
     <Route path='/products/:id' element={<Productpage  addtocart={addtocart} closenav={closenav}/>} />
     <Route path='/products' element={<Productspage addtocart={addtocart} closenav={closenav}/>} />
     <Route path='/about' element={<Aboutpage closenav={closenav}/>} />
     <Route path='/cart' element={<Cartpage cart={cart} removefromcart={removefromcart} closenav={closenav}/>} />
     <Route path='/login' element={<Loginpage closenav={closenav}/>} />
     <Route path='/signup' element={<Signuppage closenav={closenav}/>} />
     <Route path='/services' element={<Servicepage closenav={closenav}/>} />
     {/* <Productspage/> */}

     </Routes>
     <Footer />
    </>
  );
}

export default App;
