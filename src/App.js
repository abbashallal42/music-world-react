import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Filter from "./Pages/Filter";
import Cart from "./Pages/Cart";
import ProductsDetails from "./Components/ProductsDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:id" element={<ProductsDetails />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;