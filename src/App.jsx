import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar';
import Products from './Pages/Products';
import Footer from './Component/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Pages/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Products></Products>}/>
        <Route path="/cart" element={<Cart></Cart>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;