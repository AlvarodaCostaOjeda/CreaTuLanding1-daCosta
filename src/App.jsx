import { Footer } from "./components/layouts/footer/Footer";
import { Navbar } from "./components/layouts/navBar/Navbar";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
//ItemDetailContainer no esta siendo usado
import { BrowserRouter, Routes, Route } from "react-router";
import Cart from "./components/pages/cart/Cart";
import Checkout from "./components/pages/checkout/Checkout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoria" element={<ItemListContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetail></ItemDetail>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h2>404 Not found</h2>} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
