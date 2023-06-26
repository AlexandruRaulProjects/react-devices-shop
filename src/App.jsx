import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Product from "./pages/Product";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="product/:slug" element={<Product />} />
      <Route path="success" element={<Success />} />
    </Routes>
  );
}

export default App;
