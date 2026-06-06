import { Link } from "react-router-dom";
import ProdStyles from "./prodStyles";

function Product({ id, title, image, price, type }) {
    return (
        <div style={ProdStyles.card}>
            <img src={image} alt={title} style={ProdStyles.image} />
            <h3 style={ProdStyles.title}>{title}</h3>
            <p style={ProdStyles.price}>{price} DH</p>
            <p style={ProdStyles.type}>Type : {type}</p>
            <Link to={`/details/${id}`}>
                <button style={ProdStyles.button}>Détails</button>
            </Link>
        </div>
    );
}

export default Product;