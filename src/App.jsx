import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar';
import Products from './Pages/Products';
import Footer from './Component/Footer';

const App = () => {
  return (
    <div >
      <Navbar/>
      <Products/>
      <Footer/>
    </div>
  );
};

export default App;