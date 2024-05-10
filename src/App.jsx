
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Cart from './Component/Cart';


const App = () => {

  
  return (
    // <ProductContext.Provider value={productsData.products}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
  
  );
}

export default App;