
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Footer from './Components/Footer/Footer';
import men_baner from './Components/Assets/banner_mens.png'
// import women_baner from './Components/Assets/banner_women.png'
import women_baner from './Components/Assets/banner_women.png'
import kids_baner from './Components/Assets/banner_kids.png'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_baner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_baner} category="women" />}/>
          <Route path='/kids' element={<ShopCategory banner={kids_baner} category="kid" />} />
          <Route path='product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
