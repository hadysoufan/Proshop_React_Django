import './App.css';
import Footer from './components/Footer/Footer.components';
import Header from './components/Header/Header.components';
import Home from './screens/Home/Home.screen';
import Product from './screens/Product/Product.screen';
import { Container } from 'react-bootstrap';
import CartScreen from './screens/Cart/Cart.screen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart/:id?" element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
