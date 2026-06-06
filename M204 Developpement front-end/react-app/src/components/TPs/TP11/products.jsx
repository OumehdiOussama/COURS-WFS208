import Product from './product';
import ProdStyles from './prodStyles';

function Products({ productsData }) {
    return (
        <div style={ProdStyles.container}>
            {productsData.map((e) => (
                <Product id={e.id} title={e.title} image={e.image} price={e.price} type={e.type} />
            ))}
        </div>
    );
};
export default Products;