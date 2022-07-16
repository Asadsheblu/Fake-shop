
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes,Route} from "react-router-dom";
import Products from './Components/Shop/Products';
import Home from './Components/Home/Home';
import Productdetails from './Components/Shop/Productdetails';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/product/:productId' element={<Productdetails />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
