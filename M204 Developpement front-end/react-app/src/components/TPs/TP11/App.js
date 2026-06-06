import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { productsData } from "./productData";
import ProductDetails from "./productDetails";
import Products from "./products";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Products productsData={productsData} />} />
                <Route path="/details/:id" element={<ProductDetails productsData={productsData} />} />
            </Routes>
        </Router>
    );
}
export default App;