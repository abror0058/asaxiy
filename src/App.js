import './App.css';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from "react-router-dom"
import Home from './router/home/Home';
import Cart from './router/cart/Cart'
import Login from './router/login/Login'
import Payment from './router/payment/Payment'
import Wishlist from './router/wishlist/Wishlist'
import Carry from './router/carry/Carry'
import SingleRoute from './router/single-route/SingleRoute'
import Admin from './router/admin/Admin'
import Past from "./components/past/Past"
import Slide from './components/slide/Slide';
import Lastone from './components/lastone/Lastone';
import Ending from './components/ending/Ending';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/carry' element={<Carry />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/admin/*' element={<Admin />} />
        <Route path='/product/:id' element={<SingleRoute />} />
      </Routes>
      <Past />
      <Slide />
      <Lastone />
      <Ending />
      <Footer />
    </div>
  );
}

export default App;
