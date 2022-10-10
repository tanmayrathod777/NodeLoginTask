import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login/Login";
import Page404 from "./Page404";
import AddProduct from "./Product/AddProduct";
import AllProducts from "./Product/AllProducts";
import EditProduct from "./Product/EditProduct";
import Registration from "./Registration/Registration";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/allProducts" element={<AllProducts />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/editproduct/*" element={<EditProduct />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
