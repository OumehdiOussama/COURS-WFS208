import { useParams, Link } from "react-router-dom";
import ProdStyles from "./prodStyles";

function ProductDetails({ productsData }) {
    const { id } = useParams();
    const product = productsData.find((p) => p.id === parseInt(id));

    return (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
            <h3 style={ProdStyles.title}>{product.title}</h3>
            <img src={product.image} alt={product.title} style={{ width: "300px", borderRadius: "10px" }} />
            <p style={ProdStyles.price}>{product.price} DH</p>
            <p style={ProdStyles.type}>Type : {product.type}</p>
            <p style={ProdStyles.description}>{product.description}</p>


            <Link to="/">
                <button style={{ backgroundColor: "#2ecc71", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                    Retour aux produits
                </button>
            </Link>
        </div>
    );
}

export default ProductDetails;